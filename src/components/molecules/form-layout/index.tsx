import React from "react";
import { Header } from "@/components/organisms/header";

interface LayoutProps {
  title: string;
  step: number;
  setStep: (step: number) => void;
  children?: React.ReactNode;
}

export const FormLayout: React.FC<LayoutProps> = ({
  title,
  step,
  setStep,
  children,
}) => {
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-layout-img bg-cover bg-no-repeat min-h-screen flex justify-center items-center">
      <div className=" ">
        <div className="bg-white shadow-lg rounded-[25px] max-w-[1020px] p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="inter text-[30px] font-normal">{title}</h2>
          </div>
          <div className="w-full h-[9px] bg-[#E2E6F9] rounded-full mb-[51px] relative">
            <div
              className={`h-[15px] bg-primary rounded-full transition-all duration-300 absolute top-[-3px]`}
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
          <form className="grid grid-cols-2 gap-6">
            {children}

            <div className="col-span-2 flex justify-center gap-10 mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-primary text-gray-700 py-2 px-6 rounded-lg focus:outline-none focus:ring-0"
                disabled={step === 1}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-0"
              >
                {step === 4 ? "Register" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
