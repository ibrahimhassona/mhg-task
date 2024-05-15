import React from "react";
import MobileFrame from "@/app/_component/MobileFrame";
import CrudLinks from "@/app/_component/CrudLinks";

const page = () => {
  return (
    <section className="container grid grid-cols-[2fr,3fr]  gap-2 mt-4 max-md:flex max-md:flex-col">
      {/* ------------------ PRESENTATION PART ----------------- */}
      <div className="bg-white rounded-md p-4 min-h-[calc(100vh-150px)] flex justify-center items-center">
        <MobileFrame page="links" />
      </div>
      {/* --------------------- CUSTOMIZE PART ----------------- */}
      <div className="customize-part-inlinks-page">
        {/* Text */}
        <div className="flex flex-col gap-2 mb-4 ">
          <h1 className=" font-bold text-2xl ">Customize your links</h1>
          <p className="text-xs text-gray">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        {/*----------- Add / Delete / Edite links ----------------*/}
        <CrudLinks />
        
      </div>
    </section>
  );
};

export default page;
