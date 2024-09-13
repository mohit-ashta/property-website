import Button from "@/components/atoms/button";
import { UserHeaderMenu } from "@/constants/common-routes";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface headerProps {
  className?: ReactNode;
}

export const Header: React.FC<headerProps> = ({ className }) => {
  const router = useRouter();
  return (
    <nav className={`bg-cream ${className}`}>
      <div className="container">
        <div className="flex justify-between items-center pt-[60px] pb-[53px]">
          <div>
            <h5 className="text-primary text-2xl font-bold quicksand">
              IMA Ventures
            </h5>
            <p className="text-base leading-[21px] public-sans text-black">
              It’s all about the people
            </p>
          </div>

          <ul className="flex items-center text-black font-bold gap-5">
            {UserHeaderMenu.map((item) => (
              <div key={item.id}>
                {item.dropDown ? (
                  <>
                    <li
                      className="relative group text-base montserrat flex items-center cursor-pointer"
                      key={item.id}
                    >
                      {item.title} <RiArrowDownSLine size={23} />
                      <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md ">
                        <ul className="min-w-[140px]">
                          {item.submenu?.map((item, id) => (
                            <li
                              className="text-[12px] ml-0 px-4 py-2 hover:bg-secondary transition duration-300 ease-in-out cursor-pointer"
                              key={id}
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      key={item.id}
                      className="text-base montserrat cursor-pointer hover:text-secondary transition duration-300 ease-in-out"
                    >
                      {item.title}
                    </li>
                  </>
                )}
              </div>
            ))}
          </ul>
          <div>
            <Button text="Register" variant="secondary" onClick={()=>router.push("/register")} />
          </div>
        </div>
      </div>
    </nav>
  );
};
