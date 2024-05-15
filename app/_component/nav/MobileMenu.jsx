import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { HiLink } from "react-icons/hi2";
// This Component for mobile menu his control based on prop case that comming from Nav .
const MobileMenu = ({ caseMenu, curentPathName, changeCaseMenu }) => {
  return (
    // BODY OF MENU
    <div
      className={`${
        caseMenu ? "right-0" : "right-[-60%]"
      } h-fit py-8 px- rounded-l-md  w-[50%] absolute  top-[5.4rem] bg-white transition-300 z-30  shadow-md sm:hidden`}
    >
      {/* LINKS */}
      <div className="flex flex-col gap-1 items-center text-gray justify-center h-full w-[95%] mx-auto">
        <Link
          onClick={() => changeCaseMenu(false)}
          className={` menu-link ${
            curentPathName.includes("links") ? "active-link" : ""
          }`}
          href="/editor/links"
        >
          <HiLink />
          Links
        </Link>
        <Link
          onClick={() => changeCaseMenu(false)}
          className={` menu-link  ${
            curentPathName.includes("profile") ? "active-link" : ""
          }`}
          href="/editor/profile"
        >
          <GoPerson className="border rounded-full" /> Profile Detailes
        </Link>
        {/* Preview */}
        <Link
          onClick={() => changeCaseMenu(false)}
          href="/"
          className=" menu-link "
        >
          Preview
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
