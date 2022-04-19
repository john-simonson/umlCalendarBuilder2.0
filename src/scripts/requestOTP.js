import { authentication } from "./firebaseConfig";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";

export const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        //ReCAPTCHA solved, allow signInWithPhoneNumber.
      },
    },
    authentication
  );
};

export function requestOTP(phone) {
  if (phone.length >= 12) {
    let appVerifier = window.recaptchaVerifier;
    setPersistence(authentication, browserLocalPersistence).then(() => {
      signInWithPhoneNumber(authentication, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}