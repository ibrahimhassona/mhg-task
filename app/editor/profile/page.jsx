"use client";
import React, { useState, useEffect } from "react";
import MobileFrame from "@/app/_component/MobileFrame";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { updateImage, updateData } from "@/redux/personData/personData";
import { toast } from "react-toastify";
import { styleToastSave } from "@/lib/custom";

const Page = () => {
  const contentRedux = useSelector((state) => state.person.content); // Data From Redux Store
  const imageRedux = useSelector((state) => state.person.image); // Image From Redux Store
  const [localContent, setLocalContent] = useState(contentRedux);
  const [image, setImage] = useState(imageRedux);
  const dispatch = useDispatch();
  const [notic, setNotic] = useState("");

  useEffect(() => {
    setLocalContent(contentRedux);
  }, [contentRedux]);
  // ------------- Image Uploader Function -------------
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 1024 * 1024) {
      setNotic("Check the image size");
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      dispatch(updateImage(reader.result));
    };
    reader.readAsDataURL(file);
  };
  // ------------- Inputs values Control Function ---------
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalContent({
      ...localContent,
      [name]: value,
    });
  };

  // ------------- Save Function ---------
  const handleSave = () => {
    dispatch(updateData(localContent));
    toast("Your changes have been successfully saved!", styleToastSave);
  };
  // ------------- Valid Conditions ---------
  const firstNameCondition = localContent.firstName.trim().length == 0;
  const lastNameCondition = localContent.lastName.trim().length == 0;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const allCondition =
    !firstNameCondition &&
    !lastNameCondition &&
    emailPattern.test(localContent.email);

  return (
    <section className="profile-parent">
        {/* --------------------------- START MOBILE FRAME ------------------------ */}
      <div className="presentation-profile">
        <MobileFrame page="profile" />
      </div>
        {/* --------------------------- START CUSTOMIZE PROFILE ------------------------ */}
      <div className="customize-profile">
        {/* --------------------------- START HEAD ------------------------ */}
        <div className="flex flex-col gap-2 mb-4 ">
          <h1 className="font-bold text-2xl">Profile Details</h1>
          <p className="text-xs text-gray">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        {/* --------------------------- END HEAD ------------------------ */}
        {/* --------------------------- START IMAGE SECTION ------------------------ */}
        <div className="flex flex-col gap-4">
          <div className="flex max-sm:flex-col max-sm:gap-3 max-sm:text-center items-center justify-between gap-2 text-gray min-h-[175px] bg-light-gray p-4 rounded-md">
            <span className="text-sm">Profile Picture</span>
            <div className="relative image overflow-hidden">
              <Image
                src={image ? image : "/person.jpg"}
                alt="Uploaded Image"
                width={120}
                height={120}
                className="rounded-md"
              />
              <label
                htmlFor="imageInput"
                className="text-xs cursor-pointer item hover:text-white"
              >
                <IoImageOutline className="change-icon text-2xl" />
                Change Image
                <input
                  id="imageInput"
                  type="file"
                  accept=".png, .jpg, .bmp"
                  onChange={(e) => handleImageChange(e)}
                  className=" hidden"
                />
              </label>
            </div>
            <p className="text-xs">
              Image must be below 1024x1024px.
              <br />
              Use PNG, JPG, or BMP format.
              <br />
              <span className="transition-300 text-red">{notic}</span>
            </p>
          </div>
          {/* --------------------------- END IMAGE SECTION ------------------------ */}
          {/* --------------------------- START FORM ------------------------ */}
          <div className="flex flex-col gap-3 bg-light-gray p-4 rounded-md text-gray">
            <div className="flex items-center justify-between">
              <label
                htmlFor="firstName"
                className={`${
                  firstNameCondition ? "text-red" : ""
                } sm:text-sm transition-300 max-sm:text-xs`}
              >
                First Name*
              </label>
              <input
                placeholder="FirstName"
                id="firstName"
                type="text"
                name="FirstName"
                value={localContent.firstName}
                onChange={(e) => handleInputChange(e)}
                className={`${
                  !firstNameCondition ? "input-shadow" : "wrong-shadow"
                } style-input `}
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastName"
                className={`${
                  localContent.lastName.trim().length == 0 ? "text-red" : ""
                } sm:text-sm transition-300 max-sm:text-xs`}
              >
                Last Name*
              </label>
              <input
                placeholder="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                value={localContent.lastName}
                onChange={(e) => handleInputChange(e)}
                className={`${
                  !lastNameCondition ? "input-shadow" : "wrong-shadow"
                } style-input `}
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className={`${
                  !emailPattern.test(localContent.email) ? "text-red" : ""
                } transition-300 sm:text-sm max-sm:text-xs`}
              >
                Email
              </label>
              <input
                placeholder="Email"
                id="email"
                type="email"
                name="email"
                value={localContent.email}
                onChange={(e) => handleInputChange(e)}
                className={`style-input ${
                  emailPattern.test(localContent.email)
                    ? "input-shadow"
                    : "wrong-shadow"
                }`}
              />
            </div>
          </div>
          {/* --------------------------- END FORM ------------------------ */}
        </div>
        {/* --------------------------- SAVE BTN ------------------------ */}
        <div className="absolute left-0 bottom-0 rounded-t-md bg-white p-4 mt-10 top-shadow flex justify-end w-full">
          <button
            className={`${
              allCondition
                ? "bg-purple hover:bg-extra-purple"
                : "bg-gray cursor-not-allowed hover:bg-gray"
            } btn `}
            onClick={handleSave}
            disabled={!allCondition}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
