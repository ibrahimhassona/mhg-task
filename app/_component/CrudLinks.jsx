"use client";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ListOfLinks from "./ListOfLinks";
import { setModuleAdd } from "@/redux/moduleState/moduleState";
import Module from "./Module";
import { toast } from "react-toastify";
import { styleToastSave } from "@/lib/custom";
const CrudLinks = () => {
  // ---- Module Type State from Redux Store -------------
  const isModuleAdd = useSelector((state) => state.module.isAdd);
  const isModuleEdit = useSelector((state) => state.module.edit);
  const data = useSelector((state)=>state.dataLinks.dataLinks);
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col gap-4 ">
      {/* Add Button */}
      <button
      // Open The Module To Add New
        onClick={() => dispatch(setModuleAdd(true))}
        className="flex items-center justify-center link-nav-btn w-full"
      >
        <IoIosAdd className="text-xl" />
        <span>Add new link </span>
      </button>
      {/*------------------- New Link -------------------- */}
      <div className={`${isModuleAdd || isModuleEdit.isEdit  ? ' hidden' : ''} flex  gap-4 flex-col w-full justify-between`}>
        <ListOfLinks /> {/*--- This component have All Links That Created ---- */}
        {/* Save Button */}
        <div className={`${data.length < 2 ? 'absolute left-0 bottom-0':''} rounded-t-md bg-white p-4 mt-10 top-shadow flex justify-end  w-full`}>
          <button className={` btn bg-purple hover:bg-extra-purple`} onClick={()=>toast('Your changes have been successfully saved!' ,styleToastSave)}>
            Save
          </button>
        </div>
      </div>
      {/* ------------------ Module => Its open when change the state by the button Up ----------------- */}
      <div className={`${isModuleAdd || isModuleEdit.isEdit ? "block" : "hidden"} module `}>
        <div className='module-link'>
          <Module />
        </div>
      </div>
    </div>
  );
};

export default CrudLinks;
