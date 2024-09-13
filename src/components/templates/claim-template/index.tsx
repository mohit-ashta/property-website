import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export const ClaimTemplate: React.FC = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (value: any) => {
    setPhoneNumber(value);
  };
  return (
    <div className="bg-layout-img bg-cover bg-no-repeat min-h-screen flex justify-center items-center">
      <div className=" ">
        <div className="bg-white shadow-lg rounded-[25px] w-[520px] p-8">
          <h2 className="inter text-[30px] font-normal">Register Claim</h2>
          <form className="flex flex-col gap-6 mt-8">
            <div>
              <input
                type="text"
                className="border border-gray-300 text-gray-700 w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-white  "
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="border border-gray-300 text-gray-700 w-full p-3 rounded-lg focus:outline-none focus:ring-1  focus:border-white focus:ring-secondary"
                placeholder="Work Email"
              />
            </div>
            <div className="phone_wrapper">
              <PhoneInput
                className={"mb-3"}
                international
                onChange={handlePhoneNumberChange}
                placeholder="Phone"
              />
            </div>

            <button
              type="button"
              className="bg-primary text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-0"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
