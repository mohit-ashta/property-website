import React from "react";

interface TitleProps {
  title: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`font-bold roboto text-[36px] leading-[43.6px] text-black mb-0 ${className}`}
    >
      {title}
    </h2>
  );
};
