import React from 'react';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const InputField: React.FC<InputProps> = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-[14x] leading-[26px] font-medium text-black">
        {label}
      </label>
      <div className="relative mt-[6px]">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full pl-[20px] pr-[20px] border ${
            error ? 'border-red-500' : 'border-primary'
          } bg-transparent rounded-[8px] focus:outline-none focus:border-secondary h-[52px] text-[14px] leading-[26px] poppins placeholder:text-black`}
        />
        {error && <p className="text-red-500 text-[12px]">{error}</p>}
      </div>
    </div>
  );
};


