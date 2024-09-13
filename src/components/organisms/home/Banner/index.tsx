import Button from "@/components/atoms/button";
import { SelectField } from "@/components/atoms/select-field";
import { PROPERTY_TYPES } from "@/constants/banner";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="bg-cream pb-[159px]">
      <div className="container relative">
        <div className="flex gap-2">
          <div className="flex flex-col z-10">
            <div className="flex justify-center ">
              <h1 className="text-secondary text-[48px] font-semibold leading-[64px] roboto">
                <span className="text-primary">
                  Solutions for Short-Term <br /> Accommodation for
                </span>
                <br />
                Uprooted Policyholders and <br />
                Insurance Companies
              </h1>
              <div>
                <div className="flex justify-between bg-white rounded-[27px] p-[5px] mt-[12px]">
                  <input
                    className="min-w-[284px] py-[9px] ps-[23px] text-primary border-primary roboto  rounded-[9px] focus:outline-none focus:border-primary font-medium text-[14px] leading-[21px] placeholder-primary placeholder:font-bold"
                    type="search"
                    placeholder="Search Property"
                  />
                  <button className="bg-primary rounded-full w-10 h-10 flex justify-center items-center text-white">
                    <IoSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[42px]">
              <p className="text-[12px] roboto text-primary">
                From as low as $10 per day with limited time offer discounts.
              </p>
              <div className="bg-white  p-[15px] rounded-[9px] mt-[16px] min-w-[900px]  drop-shadow-lg border border-black">
                <div className="flex gap-5">
                  <div className="grid grid-cols-3 gap-[24px] w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <h4 className="text-[9px] leading-[18px] text-primary roboto ps-1">
                          Keyword
                        </h4>
                        <input
                          className="text-[11px] text-black roboto border-0 placeholder:text-black  placeholder:ps-0 ps-1 focus:outline-none"
                          placeholder=" Enter Keyyword"
                        />
                      </div>
                      <span className="self-end pb-2">
                        <IoSearch />
                      </span>
                    </div>
                    <div className="border-e h-6">
                      <SelectField
                        title="Status"
                        options={[
                          { id: 1, name: "All Status" },
                          { id: 2, name: "2BHK" },
                          { id: 3, name: "3BHk" },
                        ]}
                      />{" "}
                    </div>
                    <div className="border-e h-6">
                      <SelectField
                        title="Type"
                        options={[
                          { id: 1, name: "All Type" },
                          { id: 2, name: "2BHK" },
                          { id: 3, name: "3BHk" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-[7px]">
                    <input
                      className="min-w-[254px] py-[9px] ps-[23px] text-black border-primary roboto border rounded-[9px] focus:outline-none focus:border-primary font-medium text-[11px] leading-[21px] placeholder-black placeholder:font-bold"
                      type="search"
                      placeholder="Filter"
                    />
                    <Button
                      text="Search"
                      className="text-[11px] leading-[21px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[14px] items-center mt-[20px]">
              <h5 className="text-[12px] text-primary roboto leading-[12px]">
                Popular Search
              </h5>
              <div className="flex gap-[7px] items-center">
                {PROPERTY_TYPES.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white border border-primary rounded-[24px]"
                  >
                    <h6 className="text-[9px] leading-[24px] px-[14px] cursor-pointer">
                      {type}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3  w-2/5 min-h-[500px] absolute  right-0 ">
            <div className="w-full h-full">
              <Image
                width={1000}
                height={1000}
                className=" object-cover h-full  rounded-tl-[200px]  rounded-b-[40px] rounded-e-none"
                src={"/images/building.avif"}
                alt="building"
              />
            </div>

            <div className="flex flex-col justify-between ">
              <div className="h-[188px]">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-top  rounded-tr-[40px] rounded-br-[40px]"
                  src={"/images/home.avif"}
                  alt="home"
                />
              </div>
              <div className="h-[300px]">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full object-cover rounded-tr-[40px] rounded-br-[200px] h-full"
                  src={"/images/home5bhk.avif"}
                  alt="building"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
