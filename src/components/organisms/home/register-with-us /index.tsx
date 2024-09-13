import { InputField } from "@/components/atoms/input";
import { Select } from "@/components/atoms/select-field";

import { TITLES } from "@/constants/titles";
import Image from "next/image";
import React from "react";

export const RegisterWithUs = () => {
  return (
    <section className="py-[85px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-[30px] leading-[30px] text-black poppins font-semibold mb-[11px]">
              Register with us{" "}
            </h4>
            <p className="text-[15px] leading-[28px] text-black poppins font-medium mb-[13px]">
              As the complexity of buildings to increase
            </p>
            <div className="flex flex-col gap-[20px] mt-[19px]">
              <div>
                <Select
                  title="Resident Type"
                  options={[
                    { id: 1, name: "apartment" },
                    { id: 2, name: "shop" },
                  ]}
                />
              </div>

              <div className="grid grid-cols-2 gap-[32px]">
                <Select
                  title="Address"
                  options={[
                    { id: 1, name: "canada" },
                    { id: 2, name: "australia" },
                  ]}
                />
                <InputField
                  name="yourName"
                  label="Your Name"
                  placeholder="Your Name"
                />
              </div>

              <InputField
                name="email"
                label="email"
                placeholder="example@gmail.com"
                type="email"
              />
              <div>
                <Select
                  title="Personnel Role"
                  options={[
                    { id: 1, name: "role" },
                    { id: 2, name: "admin" },
                  ]}
                />
              </div>

              <div className="flex gap-[32px]">
                <InputField
                  name="maxPrice"
                  label="Max Price"
                  placeholder="$90"
                />
                <InputField
                  name="maxSize"
                  label="Min Size (Sq ft)"
                  placeholder="20"
                />
              </div>

              <button className="w-full bg-primary py-[12px] text-[15px] leading-[28px] poppins font-bold text-white rounded-[8px]">
                {TITLES.SUBMIT}
              </button>
            </div>
          </div>
          <div>
            <div className="max-w-[600px]">
              <Image
                width={1000}
                height={1000}
                className="object-cover"
                src={"/svg/decor.svg"}
                alt="decor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
