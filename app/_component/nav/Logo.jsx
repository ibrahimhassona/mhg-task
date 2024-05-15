import React from "react";
import { RiLinksFill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <div className="text-xl  font-bold bg-purple text-white rounded-md p-1">
        <RiLinksFill className="rotate-45" />
      </div>
      <h1 className=" font-bold text-lg">devlinks</h1>
    </div>
  );
};

export default Logo;
