import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Option {
  id: number;
  name: string;
}

interface SelectFieldProps {
  title: string;
  options: Option[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ title, options }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };


  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <h4 className="text-[9px] leading-[18px] text-primary roboto">{title}</h4>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-3 justify-between w-full pe-4"
      >
        <span className="text-[11px] text-black roboto">
          {selectedOption ? selectedOption.name : "Select an option"}
        </span>
        <span className="ml-2">
          <IoMdArrowDropdown />
        </span>
      </button>
      {showDropdown && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center gap-4 p-2 cursor-pointer hover:bg-secondary transition-all duration-300 ease-in-out"
              onClick={() => handleSelect(option)}
            >
              <p className="mb-0 text-[11px] text-black roboto">
                {option.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


interface Option {
  id: number;
  name: string;
}

interface SelectProps {
  title: string;
  options: Option[];
}

export const Select: React.FC<SelectProps> = ({ title, options }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <h4 className="text-[14px] leading-[26px] font-medium text-black mb-[6px]">
        {title}
      </h4>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-3 justify-between w-full"
      >
        <div className="w-full pl-[20px] pr-[20px] border bg-transparent border-primary rounded-[8px] focus:outline-none focus:border-secondary h-[52px] text-[14px] leading-[26px] poppins flex items-center">
          {selectedOption ? selectedOption.name : "—Please choose an option—"}
        </div>
      </button>
      {showDropdown && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              <p className="mb-0 text-[11px] text-black roboto">
                {option.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
