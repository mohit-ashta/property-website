import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  text,
  onClick ,
  ...props
}) => {
  const baseStyles =
    "py-[8px]  px-[31px] rounded-[9px] focus:outline-none transition duration-200 ease-in-out  font-bold leading-[26px]";
  const variantStyles =
    variant === "primary"
      ? `bg-secondary text-black roboto`
      : "bg-transparent text-black border border-primary public-sans text-[19px]";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}  onClick={onClick} 
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
