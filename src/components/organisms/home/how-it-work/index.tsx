import { KeySteps } from "@/components/molecules/key-steps";
import { keyStepsData } from "@/constants/how-it-work";
import Image from "next/image";
import React from "react";

export const HowItWork = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center  gap-10">
          <div className="max-w-[600px]">
            <Image
              width={1000}
              height={1000}
              className=" object-cover"
              src={"/svg/work-banner.svg"}
              alt="how-it-work"
            />
          </div>
          <div>
            <h3 className="text-[36px] leading-[46px] text-black roboto font-bold mb-[18px]">
              How It works? <br /> Find a perfect home
            </h3>
            <p className="text-[14px] leading-[27px] text-black roboto font-normal">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi. Leo diam diam.
            </p>
            <div className="mt-[26px] flex flex-col gap-[26px]">
              {keyStepsData.map((step) => {
                return (
                  <KeySteps
                    key={step.id}
                    imgSrc={step.imgSrc}
                    imgAlt={step.imgAlt}
                    title={step.title}
                    description={step.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
