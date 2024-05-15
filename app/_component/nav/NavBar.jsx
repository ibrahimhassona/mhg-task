"use client";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { HiLink } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const NavBar = () => {
  // To controle on mobile menu .
  const [isOpen, setIsOpen] = useState(false);
  //   To put active-link class on current link .
  const pathname = usePathname();
  const curentPathName = pathname.split("/");

  return (
    <nav className="container flex items-center justify-between p-3 rounded-md bg-white ">
      {/* Logo */}
      <Logo />
      {/* Links & Profile */}
      <div className="flex gap-4 items-center text-gray max-sm:hidden">
        <Link
          className={`link ${
            curentPathName.includes("links") ? "active-link" : ""
          }`}
          href="/editor/links"
        >
          <HiLink />
          Links
        </Link>
        <Link
          className={`link ${
            curentPathName.includes("profile") ? "active-link" : ""
          }`}
          href="/editor/profile"
        >
          <GoPerson className="border rounded-full" />
          Profile Detailes
        </Link>
      </div>
      {/* Preview */}
      <Link href="/" className="link-nav-btn max-sm:hidden">
        Preview
      </Link>
      {/* MOBILE VIEW */}
      <MobileMenu
        caseMenu={isOpen}
        curentPathName={curentPathName}
        changeCaseMenu={setIsOpen}
      />
      {isOpen ? (
        <MdClose
          onClick={() => setIsOpen(false)}
          className="sm:hidden text-3xl text-purple hover:text-extra-purple cursor-pointer transition-300"
        />
      ) : (
        <FiMenu
          onClick={() => setIsOpen(true)}
          className="sm:hidden text-3xl text-purple hover:text-extra-purple cursor-pointer transition-300"
        />
      )}
    </nav>
  );
};

export default NavBar;
