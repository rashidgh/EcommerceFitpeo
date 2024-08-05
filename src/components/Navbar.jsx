import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import Profile from "../assets/profileImg.jpg";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-[5rem] w-[94vw] bg-[#1F2029] flex justify-center ">
      <div id="navbar" className=" flex justify-between w-[90vw] items-center">
        <div id="searchBlock" className="w-[25%] relative">
          <input
            id="searchBar"
            className="p-1.5 pl-8 w-[20vw] rounded-[4px] bg-[#292B2F] text-[#fff]"
            type="text"
            placeholder="Search"
          />
          <span className="absolute left-2 top-2.5 text-[#fff]">
            <FiSearch />
          </span>
        </div>
        <div
          id="menuSection"
          className="w-[25%] flex gap-3 justify-end items-center text-2xl text-[#A0A2A7]"
        >
          <span
            id="settingIcon"
            className="inline-block p-[6px] bg-[#434549] rounded-full"
          >
            <HiOutlineMail />
          </span>

          <span
            id="settingIcon"
            className="inline-block p-[6px] bg-[#434549] rounded-full"
          >
            <IoSettingsOutline />
          </span>
          <span
            id="settingIcon"
            className="inline-block p-[6px] bg-[#434549] rounded-full relative"
          >
            <p className="h-2.5 w-2.5 bg-[#6F93FB] rounded-full absolute right-2"></p>
            <IoNotificationsOutline />
          </span>
          <span>
            <img
              className="h-[40px] w-[40px] rounded-full ml-4"
              src={Profile}
              alt="profileImg"
            />
          </span>
          <span
            onClick={() => setToggle(!toggle)}
            id="menuIcon"
            className="inline-block p-[6px] bg-[#434549] rounded-full relative"
          >
            <FiMenu />
          </span>
        </div>
      </div>
      {toggle ? (
        <div className="mobMenu" data-aos="fade-left">
          <div className="icon">
            <span className="inline-block p-[6px] bg-[#434549] rounded-full text-2xl text-[#A0A2A7]">
              <HiOutlineMail />
            </span>
            <span className="text-[#fff]">Email</span>
          </div>

          <div className="icon">
            <span className="inline-block p-[6px] bg-[#434549] rounded-full text-2xl text-[#A0A2A7]">
              <IoSettingsOutline />
            </span>
            <span className="text-[#fff]">Settings</span>
          </div>
          <div className="icon"style={{border:"none"}}>
            <span className="inline-block p-[6px] bg-[#434549] rounded-full relative text-2xl text-[#A0A2A7]">
              <p className="h-2.5 w-2.5 bg-[#6F93FB] rounded-full absolute right-2"></p>
              <IoNotificationsOutline />
            </span>
            <span className="text-[#fff]">Notifications</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
