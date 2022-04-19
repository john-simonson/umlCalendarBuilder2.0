import React from "react";
import Nav from "../Nav";
import ReactCodeInput from "react-verification-code-input";
import verifyOTP from "../../scripts/verifyOTP";
import { useNavigate, useLocation } from "react-router-dom";
import addNewUser from "../../scripts/addUser";

export default function Code() {
    const online = window.navigator.onLine;
    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state;
    console.log(from);
    return (
      <div className="flex flex-col justify-between h-screen">
        
        {online && (<div>
        <header>
        <Nav
          navItems={[
            { name: "Home", to: "/" },  
            { name: "My Classes", to: "/my-classes"},
          ]}
        />
          <div className="flex items-center w-3/5 mx-auto mt-4 justify-evenly">
            <h1 className="mx-auto text-indigo-400 w-max">Enter Your Code</h1>
            <div className="invisible"></div>
          </div>
        </header>
        <main className="mb-auto">
          <div className="mx-auto w-max">
            <ReactCodeInput
              className="custom-class"
              //code which excecutes after OTP verification code is correctly verified
              onComplete={(val) => {
                verifyOTP(val).then(function (flag) {
                  console.log("After Set Enabled: " + flag);
                  console.log(flag);
                  if (flag === true) {
                    addNewUser();
                    navigate("/")
                  }
                });
              }}
            />
          </div>
        </main>
        </div>)}
      </div>
    );
  }
  