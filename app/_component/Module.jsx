"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_component/ui/select";
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
import { setModuleEdit } from "@/redux/moduleState/moduleState";
import { addLink, updateLink } from "@/redux/datalinks/dataLinks";
import { toast } from "react-toastify";
import { styleToastAdded } from "../../lib/custom";
import { styleToastUpdated } from "../../lib/custom";

// This is Module component open to (Add or Update) Link .
// the opening procces Accourding State in Redux Store .

const Module = () => {
  const isModuleEdit = useSelector((state) => state.module.edit);
  const dispatch = useDispatch();
  const [urlState, setUrlState] = useState("");
  const [selectState, setSelectState] = useState("");
  const [isValid, setIsValid] = useState(false);
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const isCompatible =
    selectState === "other" || urlState.split(".").includes(selectState);
  useEffect(() => {
    // Check if the URL is valid and the selectState is not empty
    setIsValid(urlRegex.test(urlState) && selectState !== "");
  }, [urlState, selectState]);

  // Check if the module 'Add' or 'Edit' Then do the acthion According this
  const { id, isEdit } = isModuleEdit || { id: 0, isEdit: false };
  const handleDone = () => {
    if (isEdit) {
      const dataUpdated = { id: id, url: urlState, title: selectState };
      dispatch(updateLink(dataUpdated));
      toast("Updated !", styleToastUpdated);
    } else {
      const newLink = { url: urlState, title: selectState };
      dispatch(addLink(newLink));
      toast("New Link Added !", styleToastAdded);
    }
    setSelectState("");
    setUrlState("");
    dispatch(setModuleEdit({ id: 0, isEdit: false }));
  };
  return (
    <div className="flex flex-col gap-3 bg-light-gray p-3 rounded-md">
      <div className="flex items-center text-gray justify-between cursor-pointer">
        <h2 className="flex items-center text-gray font-bold gap-1">
          <TbMenu />
            Link #
          <span className="">
            {isModuleEdit.isEdit
              ? `${isModuleEdit.id}`
              : "Add New "}
          </span>
        </h2>
      </div>
      <div className=" flex flex-col items-start  gap-1">
        {/* -------------- Select Name Of Platform ---------------- */}
        <span className=" text-sm">Platform</span>
        <Select
          onValueChange={(value) => setSelectState(value)}
          value={selectState}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Platform Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="github">
              <div className="selected-link capitalize">
                <TbBrandGithubFilled className=" text-gray" />
                <span>github</span>
              </div>
            </SelectItem>
            <SelectItem value="linkedin">
              <div className="selected-link capitalize">
                <IoLogoLinkedin className=" text-gray" />
                <span>linkedin</span>
              </div>
            </SelectItem>
            <SelectItem value="youtube">
              <div className="selected-link capitalize">
                <FaYoutube className=" text-gray" />
                <span>youtube</span>
              </div>
            </SelectItem>
            <SelectItem value="instagram">
              <div className="selected-link capitalize">
                <FaInstagram className=" text-gray" />
                <span>instagram</span>
              </div>
            </SelectItem>
            <SelectItem value="facebook">
              <div className="selected-link capitalize">
                <FaFacebookF className=" text-gray" />
                <span>facebook</span>
              </div>
            </SelectItem>
            <SelectItem value="whatsapp">
              <div className="selected-link capitalize">
                <FaWhatsapp className=" text-gray" />
                <span>whatsapp</span>
              </div>
            </SelectItem>
            <SelectItem value="other">
              <div className="selected-link capitalize">
                <IoLinkSharp className=" text-gray" />
                <span>other</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" flex flex-col items-start  gap-1">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm">Link</span>
          {/* ---------------- Compatible or no ------------------- */}
          <span
            className={` ${
              isCompatible ? "text-purple" : "text-red"
            } transition-300 text-xs`}
          >
            {isCompatible
              ? "Compatible with the name"
              : "Not compatible but you can submit"}
          </span>
        </div>
        <div className=" relative w-full">
          {/* -------------- Puting The Url In The State  ---------------- */}
          <input
            type="url"
            placeholder="Enter The Url"
            value={urlState}
            onChange={(e) => setUrlState(e.target.value)}
            className={`${
              urlRegex.test(urlState)
                ? "focus:shadow-indigo-500 focus:shadow-sm focus:border-purple"
                : "focus:shadow-red  focus:border-red border-red"
            } url-input-module `}
          />
          <FiLink className=" absolute left-3 top-3 text-sm text-gray" />
        </div>
      </div>
      {/* -------------- The Module Btns ---------------- */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {/* -------------- Done Btn ---------------- */}
        <button
          className={`${
            isValid ? "bg-purple" : "bg-gray hover:bg-gray cursor-not-allowed"
          } btn  hover:bg-extra-purple`}
          onClick={() => handleDone()}
          disabled={!isValid}
        >
          Done
        </button>
        {/* -------------- Cancel Btn ---------------- */}
        <button
          className="btn bg-red hover:bg-extra-red"
          onClick={() => {
            dispatch(setModuleEdit({ id: 0, isEdit: false }));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Module;
