import react, { useEffect } from "react";
import { authentication } from "../../scripts/firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { requestOTP } from "../../scripts/requestOTP";
import { RecaptchaVerifier } from "firebase/auth";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import ProgressButton from "../ProgressButton";
import Nav from "../Nav";
import LoadingSpinner from "../LoadingSpinner";


export default function Login() {
    const online = window.navigator.onLine;
    const navigate = useNavigate();
    const [value, setValue] = react.useState("");
    const [loading, setLoading] = react.useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);
    useEffect(() => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            //ReCAPTCHA solved, allow signInWithPhoneNumber.
            setLoading(false);
            navigate(`code`, { state: { from: from } });
          },
        },
        authentication
      );
    });
    return (
      <div className="flex flex-col justify-between h-screen">
        
        {online && (<div>
        {loading && <LoadingSpinner />}
        <header>
        <Nav
          navItems={[
            { name: "Home", to: "/" }, 
            { name: "My Classes", to: "/my-classes"}, 
          ]}
        />
          <div className="mx-auto mt-4 flex w-3/5 items-center justify-evenly">
            <h1 className="mx-auto w-max text-green-500">
              What's Your Number?
            </h1>
            <div className="invisible"></div>
          </div>
        </header>
        <main className="flex flex-col justify-between h-full mb-auto">
          <div className="mx-auto my-24 w-max">
              <PhoneInput
                defaultCountry="US"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
          </div>
          <div className="mx-auto mb-24 w-max">
            <ProgressButton
              onClick={() => {
                setLoading(true);
                requestOTP(value);
              }}
              enabled={isPossiblePhoneNumber(value + "")}
              to={``}
              text="Send Code"
            />
          </div>
        </main>
        <div id="recaptcha-container"></div>
        </div>)}
        {!(online) && (<div>
          {alert("Error! Offline")}
        </div>)}
      </div>
    );
  }

  