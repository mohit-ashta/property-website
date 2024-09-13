import Image from "next/image";

interface TestimonialProps {
  title: string;
  description: string;
  profileImage: string;
  name: string;
  position: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  title,
  description,
  profileImage,
  name,
  position,
}) => {
  return (
    <div className="bg-white rounded-lg px-[34px] py-[31px] max-w-[400px] ms-auto relative">
      <Image
        width={50}
        height={1000}
        className="object-cover rounded-full object-center absolute right-[38px]"
        src={"/svg/comma.svg"}
        alt="profile"
      />
      <div className="flex flex-col gap-2 border-b border-secondary pb-[20px]">
        <h4 className="text-[16px] leading-[19px] text-black font-bold poppins">
          {title}
        </h4>
        <p className="mt-[22px] text-[14px] leading-[28px] text-black font-bold poppins">
          {description}
        </p>
        <Image
          width={90}
          height={90}
          className="object-contain"
          src={"/svg/star.svg"}
          alt="star"
        />
      </div>
      <div className="flex gap-[20px] items-center mt-[16px]">
        <div className="w-[45px] h-10 mb-2">
          <Image
            width={1000}
            height={1000}
            className="object-cover rounded-full object-center"
            src={profileImage}
            alt="profile"
          />
        </div>
        <div>
          <h4 className="text-[14px] leading-[16px] text-black font-semibold poppins">
            {name}
          </h4>
          <p className="text-[12px] leading-[24px] text-black font-medium poppins">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};
