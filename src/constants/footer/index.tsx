import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
];

export const links = {
    rental: [
      { name: "Blogs", path: "/blog" },
      { name: "FAQ", path: "/faq" },
      { name: "Job offers", path: "/job-offers" },
      { name: "Services", path: "/services" },
    ],
    reach: [
      { name: "About Us", path: "/about-us" },
      { name: "Data Policy", path: "/data-policy" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Contact", path: "/contact" },
    ],
  };
  

export const contactDetails = [
  {
    icon: "/svg/location.svg",
    alt: "Location",
    content: (
      <>
        Complete address <br />
        street address
      </>
    ),
  },
  {
    icon: "/svg/phone.svg",
    alt: "Phone",
    content: "+1 67322 99999",
    isClickable: true,
  },
  {
    icon: "/svg/message.svg",
    alt: "Message",
    content: "info@website.com",
    isClickable: true,
  },
];
