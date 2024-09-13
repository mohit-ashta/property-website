import { FormLayout } from "@/components/molecules/form-layout";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export const RegistrationTemplate: React.FC = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (value: any) => {
    setPhoneNumber(value);
  };
  return (
    <FormLayout
      title="Property Owner Registration"
      step={step}
      setStep={setStep}
    >
      <div>
        <input
          type="text"
          className="border border-gray-300 text-gray-700 w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-white  "
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-gray-300 text-gray-700 w-full p-3 rounded-lg focus:outline-none focus:ring-1  focus:border-white focus:ring-secondary"
          placeholder="Property Address"
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
      <div>
        <input
          type="text"
          className="border border-gray-300 text-gray-700 w-full p-3 rounded-lg focus:outline-none focus:ring-1  focus:border-white focus:ring-secondary"
          placeholder="VRBO Listing URL"
        />
      </div>
      <div>
        <input
          type="email"
          className="border border-gray-300 text-gray-700 w-full p-3 rounded-lg focus:outline-none focus:ring-1  focus:border-white focus:ring-secondary"
          placeholder="Email"
        />
      </div>
    </FormLayout>
  );
};
