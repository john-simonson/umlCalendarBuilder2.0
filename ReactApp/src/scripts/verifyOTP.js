
export default function verifyOTP(otp) {
  return new Promise(function (resolve, reject) {
    if (otp.length === 6) {
      //console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          console.log("Registered User");
          resolve(true);
        })
        .catch((error) => {
          console.log(error);
          resolve(false);
        });
    }
  });
}