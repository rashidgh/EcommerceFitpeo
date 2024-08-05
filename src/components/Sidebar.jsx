import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiAppsFill } from "react-icons/ri";
import { BiBarChartSquare } from "react-icons/bi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { RiWallet3Line } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import Dashboard from "./Dashboard";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 430);

  return (
    <div
      className={`w-[5rem] h-[auto] bg-[#1F2029] flex ${
        isLargeScreen ? "gap-6" : "gap-2"
      }`}
    >
      <div id="sidebar" className="flex flex-col items-center">
        <div className="flex flex-col gap-8  items-center text-2xl w-[100%] h-[96%] text-[#96979D]">
          <span className="text-5xl  text-[#7394FD] p-4">
            <RiAppsFill />
          </span>
          <span className="text-[#7394FD]  w-[100%] flex justify-center">
            <p className="h-[24px] w-[4px] bg-[#7394fd] absolute left-0 rounded-md"></p>
            <AiFillHome />
          </span>
          <span>
            <BiBarChartSquare />
          </span>
          <span>
            <HiOutlineClipboardCheck />
          </span>
          <span>
            <RiWallet3Line />
          </span>
          <span>
            <IoBagCheckOutline />
          </span>
        </div>
        <div>
          <span className="text-2xl mb-12 inline-block text-[#A5A6AD]">
            <RiLogoutCircleRLine />
          </span>
        </div>
      </div>

      <Dashboard />
    </div>
  );
};

export default Sidebar;
