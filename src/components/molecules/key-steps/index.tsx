import Image from "next/image";

interface KeyStepsProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

export const KeySteps: React.FC<KeyStepsProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <div className="flex gap-[17px]">
      <Image
        width={50}
        height={50}
        className="object-contain"
        src={imgSrc}
        alt={imgAlt}
      />
      <div>
        <h4 className="text-[18px] leading-[22px] font-bold roboto mb-[9px]">
          {title}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
