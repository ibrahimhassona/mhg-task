"use client"
import Link from "next/link";
import Presentation from "./_component/Presentation";
import { CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-toastify";
import { styleToastCopid } from "../lib/custom";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  // Function to copy the current URL to the clipboard
  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    toast('Copied !', styleToastCopid);
  };

  return (
    <main className="h-screen bg-white relative">
      {/* Top section */}
      <div className="bg-purple h-[250px] rounded-b-3xl p-4">
        {/* Container */}
        <div className="container bg-white p-3 rounded-md flex justify-between items-center">
          {/* Back to Editor button */}
          <Link href="/editor/links" className="link-nav-btn">
            Back to Editor
          </Link>
          {/* Share button */}
          <button
            className="btn bg-purple hover:bg-extra-purple"
            onClick={() => setShowDialog(true)}
          >
            Share Link
          </button>
        </div>
        {/* Presentation Template */}
        <Presentation />
      </div>

      {/* Share Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="z-10 bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-semibold mb-4">Share link</h2>
            <p className="text-sm text-gray-600 mb-4">
              Anyone who has this link will be able to view this.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={window.location.href}
                readOnly
                className="flex-1 bg-gray-100 p-2 rounded-md"
              />
            </div>
            <div className="mt-4 flex justify-around">
              <button
                className="btn bg-red hover:bg-extra-red"
                onClick={() => setShowDialog(false)}
              >
                Close
              </button>
              <button
                className="btn bg-gray-100 hover:bg-gray-200"
                onClick={copyURL}
              >
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-5 w-5 text-gray transition-colors duration-300 hover:text-purple" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
