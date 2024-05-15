"use client";
import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";
import { useSelector } from "react-redux";
// -------- Main Presentation -----------
const Presentation = () => {
  const dataLinks = useSelector((state) => state.dataLinks.dataLinks);
  const personalContent = useSelector((state)=>state.person.content)
  const personalImage = useSelector((state)=>state.person.image)
  return (
    <div className="main-presentation">
      {/* Personal Image */}
      <Image
        alt="Ibrahim"
        width={80}
        height={80}
        src={personalImage ?? `/person.jpg`}
        className="w-[80px] h-[80px] cursor-pointer rounded-full border-[3px] shadow-md border-extra-purple"
        style={{ borderRadius: "50%" }}
      />

      {/* Name & Email */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold m-0 text-[20px]">{`${personalContent.firstName} ${personalContent.lastName}`}</h1>
        <p className="text-gray m-0 text-sm ">{personalContent.email}</p>
      </div>
      {/* Personal Links */}
      <div className="flex flex-col gap-3 my-4 w-full">
        {dataLinks.map((link, index) => (
          <CustomLink title={link.title} url={link.url} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Presentation;
