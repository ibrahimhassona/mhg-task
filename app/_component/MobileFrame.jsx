"use client"
import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";
import { useSelector } from "react-redux";

// This component is reusuble component in (links & profile) page
// If the (page prop) == 'links' display some items If (page prop) == profile display other items .

const MobileFrame = ({ page }) => {
  // --------- Data From Redux Store ----------
  const dataLinks = useSelector((state)=>state.dataLinks.dataLinks)
  const personalContent = useSelector((state)=>state.person.content)
  const personalImage = useSelector((state)=>state.person.image)
  return (
    // -----------------START MOBILE DESIGNING ---------------
    <div className=" outer-mobile-border">
      <span className="mobile-camera" ></span>
      <div className="internal-mobile-border scroll-smooth">
        {/* --------------END MOBILE DESIGNING ------------ */}
        {/*--------------- START CONTENT  ------------------*/}
        {/* Personal Data */}
        <div className="flex flex-col w-full items-center mt-4 gap-4">
          {/* (Image & Name & Email) || Skeleton */}
          {page == "links" ? (
            // ----------------------------------------IN LINKS PAGE ---------------------
            <>
              <div className="animate-pulse flex flex-col gap-3 items-center w-full">
                <span className=" w-[80px] h-[80px] block bg-light-gray  rounded-full " />
                <span className=" w-[80%] h-[14px] block bg-light-gray  rounded-full " />
                <span className=" w-[40px] h-[8px] block bg-light-gray  rounded-full " />
              </div>
              {/* --------- Ready Links -----------*/}
              <div className="flex flex-col gap-3 my-4 w-full mt-8">
                {dataLinks.map((link, index) => (
                  <CustomLink title={link.title} url={link.url} key={index} />
                ))}
                {/* Create Skeleton if the links less than 6 */}
                {Array.from({ length: 5 - dataLinks.length }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="capitalize w-full p-3 shadow-md rounded-md  bg-light-gray h-[44px] animate-pulse "
                    ></div>
                  )
                )}
              </div>
            </>
          ) : (
            // --------------------------------- IN PROFILE PAGE --------------------------
            <div className="flex flex-col gap-3 items-center w-full">
              <Image
                alt="Ibrahim"
                width={80}
                height={80}
                src={ personalImage?personalImage : '/person.jpg'}
                className="w-[80px] h-[80px] cursor-pointer rounded-full border-[3px] shadow-md border-extra-purple"
              />
              <h1 className="font-bold m-0 text-[20px] text-center">{`${personalContent.firstName} ${personalContent.lastName}`}</h1>
              <p className="text-gray m-0 text-sm text-center">{personalContent.email}</p>
              {/* Personal Links */}
              <div className="flex flex-col gap-3 my-4 w-full mt-8 ">
                {dataLinks.map((link, index) => (
                  <CustomLink title={link.title} url={link.url} key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
