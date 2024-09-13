import { contactDetails } from "@/constants/footer";
import Image from "next/image";

const ContactDetails = () => {
  return (
    <div className="flex flex-col">
      <h4 className="text-[24px] font-bold leading-normal text-secondary inter w-14 border-b-4 pb-2 border-secondary">
        Contact
      </h4>
      <div className="mt-[30px] flex flex-col">
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex gap-[20px] mb-[30px]">
            <Image
              src={contact.icon}
              alt={contact.alt}
              width={45}
              height={45}
            />
            <span
              className={`text-[16px] font-medium leading-[34px] text-white inter ${
                contact.isClickable ? "cursor-pointer" : ""
              }`}
            >
              {contact.content}
            </span>
          </div>
        ))}
      </div>
      <div className="w-[300px] ml-auto text-white">
          <div className="">
            <div className="grid grid-cols-2 border-b border-dashed border-[#5F686B] pb-2">
              <span className="text-[16px] font-medium inter">Mo. - Fr.</span>
              <h4 className="text-[16px] font-medium inter text-end">
                8:00 - 17:00 Hours
              </h4>
            </div>
            <div className="grid grid-cols-2 pt-2">
              <span className="text-[16px] font-medium inter">Saturday:</span>
              <h4 className="text-[16px] font-medium inter text-end">
                9:00 - 3:30 Hours
              </h4>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactDetails;
