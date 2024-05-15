import Link from "next/link";
import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";

import {
  FaArrowRight,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";

// Array of famous links to set the style condition
const socialTypes = [
  "github",
  "linkedin",
  "youtube",
  "instagram",
  "facebook",
  "whatsapp",
];
// Default Icon
const defaultIcon = <IoLinkSharp />;
//  Function to return icon by name 
const getIcon = (name) => {
  switch (name) {
    case "github":
      return <TbBrandGithubFilled />;
    case "linkedin":
      return <IoLogoLinkedin />;
    case "youtube":
      return <FaYoutube />;
    case "instagram":
      return <FaInstagram />;
    case "facebook":
      return <FaFacebookF />;
    case "whatsapp":
      return <FaWhatsapp />;
    default:
      return defaultIcon;
  }
};

const CustomLink = ({ title, url }) => {
  // The style condition
  const iconName = socialTypes.includes(title) ? title : "default-link";
  //   Get the Icon by name
  const icon = getIcon(iconName);

  return (
    <Link href={url} className={`${iconName} initial-style`} target="_blank">
      <div className="flex gap-2 items-center justify-center">
        {icon}
        {title}
      </div>
      <FaArrowRight className="text-[12px]"/>
    </Link>
  );
};

export default CustomLink;
