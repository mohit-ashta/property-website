import { links } from "@/constants/footer";
import Link from "next/link"; // For Next.js routing

interface LinksSectionProps {
  title: string;
  linkType: keyof typeof links;
}

const LinksSection: React.FC<LinksSectionProps> = ({ title, linkType }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-[24px] font-bold leading-normal text-secondary inter w-14 border-b-4 pb-2 border-secondary">
        {title}
      </h4>
      <div className="mt-[30px] flex flex-col">
        {links[linkType].map((link, index) => (
          <Link key={index} href={link.path}>
            <span className="text-[16px] cursor-pointer font-medium leading-[46px] text-white inter hover:text-secondary">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
