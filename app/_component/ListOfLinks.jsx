"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_component/ui/alert-dialog";

import { TbBrandGithubFilled, TbMenu } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeLink } from "@/redux/datalinks/dataLinks";
import { setModuleEdit } from "@/redux/moduleState/moduleState";
import { toast } from "react-toastify";
import { styleToastDeleted } from "@/lib/custom";

const ListOfLinks = () => {
  const dispatch = useDispatch();
  const dataLinks = useSelector((state) => state.dataLinks.dataLinks);

  const handleEditModule = (moduleId) => {
    const moduleData = {
      isEdit: true,
      id: moduleId,
    };
    dispatch(setModuleEdit(moduleData));
  };
  // -------- Remove -----------
  const removeHandle = (link) => {
    dispatch(removeLink(link.id));
    toast('Deleted!',styleToastDeleted)

  };
  // ----------------------Get Icon ------------
  const defaultIcon = <IoLinkSharp className=" text-gray" />;

  const getIcon = (name) => {
    switch (name) {
      case "github":
        return <TbBrandGithubFilled className=" text-gray" />;
      case "linkedin":
        return <IoLogoLinkedin className=" text-gray" />;
      case "youtube":
        return <FaYoutube className=" text-gray" />;
      case "instagram":
        return <FaInstagram className=" text-gray" />;
      case "facebook":
        return <FaFacebookF className=" text-gray" />;
      case "whatsapp":
        return <FaWhatsapp className=" text-gray" />;
      default:
        return defaultIcon;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {dataLinks.map((link, index) => (
        <div
          className="flex flex-col gap-3 bg-light-gray p-3 rounded-md"
          key={index}
        >
          {/* Number of link & Remove*/}
          <div className="flex items-center text-gray justify-between cursor-pointer">
            <h2 className="flex items-center text-gray font-bold gap-1">
              <TbMenu /> Link #{link.id}
            </h2>
            <span className="hover:text-purple text-sm transition-300">
              {/* ------------------------------- */}
              <AlertDialog>
                <AlertDialogTrigger>Remove</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Deletion ?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      !
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeHandle(link)}>
                      Remove
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </span>
          </div>
          {/* Select */}
          <div className=" flex flex-col items-start  gap-1">
            <span className=" text-sm">Platform</span>
            <div
              className=" w-full p-2 bg-white rounded-md cursor-pointer flex items-center justify-between"
              onClick={() => handleEditModule(link.id)}
            >
              <div className="selected-link capitalize">
                {getIcon(link.title)}
                <span className=" text-sm">{link.title}</span>
              </div>
              <IoIosArrowDown className="text-md text-purple" />
            </div>
          </div>
          {/* Url */}
          <div className=" flex flex-col items-start  gap-1">
            <span className=" text-sm">Link</span>
            <div className=" relative w-full">
              <div
                onClick={() => handleEditModule(link.id)}
                className={`  overflow-hidden  cursor-pointer text-black bg-white border border-light-gray rounded-md text-sm w-full p-2 pl-8 `}
              >
                {link.url}
              </div>
              <FiLink className=" absolute left-3 top-3 text-sm text-gray" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfLinks;
