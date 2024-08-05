import React, { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbArrowsDown } from "react-icons/tb";
import { LiaDollarSignSolid } from "react-icons/lia";
import Progressbar from "./pages/Progressbar";
import CountUp from "react-countup";
import Graph from "./pages/Graph";
import { AiOutlineAim } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import RecentOrder from "./pages/RecentOrder";
import CustomerFeedback from "./pages/CustomerFeedback";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 430);
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="mt-[13vh] text-[#fff] w-[93vw] ">
      <div
        className={`${
          isLargeScreen ? "w-[90vw]" : "w-[70vw]"
        }  h-[auto] flex flex-col gap-6 mt-4`}
      >
        <div>
          <h3 className="text-2xl font-bold">Dashboard</h3>
        </div>
        <div className="flex gap-8 flex-wrap">
          <div className="flex flex-wrap gap-3">
            <div
              id="sm-card"
              className="h-[9rem] w-[12.9vw] p-3.5 bg-[#1F2029] rounded-[6px] flex flex-col justify-around"
            >
              <p className="h-[40px] w-[40px] rounded-[10px] bg-[#273469] flex justify-center item-center">
                <span className="relative text-[22px] mt-2 text-[#4460E7]">
                  <FaBasketShopping />
                  <span className="absolute top-[14px] left-[14px] text-[#fff] rounded-full text-[10px] bg-[#7D89E8]">
                    <FaPlus />
                  </span>
                </span>
              </p>
              <p className="text-[13px] mt-1 font-semibold">Total Orders</p>
              <p className="flex justify-between items-center mt-2">
                <div className="text-3xl font-bold ">
                  <CountUp end={75} duration={2}></CountUp>
                </div>
                <div className="flex items-center text-[#19BC8E] ">
                  <span className="text-[26px]">
                    <IoMdArrowDropup />
                  </span>
                  <span className="text-[14px] font-semibold "> 3%</span>
                </div>
              </p>
            </div>
            <div
              id="sm-card"
              className="h-[9rem] w-[12.8vw] p-3.5 bg-[#1F2029] rounded-[6px] flex flex-col justify-around"
            >
              <p className="h-[40px] w-[40px] rounded-[10px] bg-[#165247] flex justify-center item-center">
                <span className="relative text-[22px] mt-2 text-[#03C88C]">
                  <IoBag />

                  <span className="absolute top-[14px] left-[14px] text-[#fff] rounded-full text-[10px] bg-[#81f3d1]">
                    <IoCheckmark />
                  </span>
                </span>
              </p>
              <p className="text-[13px] mt-1 font-semibold">Total Delivered</p>
              <p className="flex justify-between items-center mt-2">
                <div className="text-3xl font-bold ">
                  <CountUp end={70} duration={2}></CountUp>
                </div>
                <div className="flex items-center text-[#E94C53]">
                  <span className="text-[26px]">
                    <IoMdArrowDropdown />
                  </span>
                  <span className="text-[14px] font-semibold "> 3%</span>
                </div>
              </p>
            </div>
            <div
              id="sm-card"
              className="h-[9rem] w-[12.8vw] p-3.5 bg-[#1F2029] rounded-[6px] flex flex-col justify-around"
            >
              <p className="h-[40px] w-[40px] rounded-[10px] bg-[#633238] flex justify-center item-center">
                <span className="relative text-[22px] mt-2 text-[#F25C63]">
                  <IoBag />
                  <span className="absolute top-[14px] left-[14px] text-[#fff] rounded-full text-[10px] bg-[#F68384]">
                    <RxCross2 />
                  </span>
                </span>
              </p>
              <p className="text-[13px] mt-1 font-semibold">Total Cancelled</p>
              <p className="flex justify-between items-center mt-2">
                <div className="text-3xl font-bold ">
                  0<CountUp end={5} duration={1}></CountUp>
                </div>
                <div className="flex items-center text-[#19BC8E] ">
                  <span className="text-[26px]">
                    <IoMdArrowDropup />
                  </span>
                  <span className="text-[14px] font-semibold "> 3%</span>
                </div>
              </p>
            </div>
            <div
              id="sm-card"
              className="h-[9rem] w-[12.8vw] p-3.5 bg-[#1F2029] rounded-[6px] flex flex-col justify-around"
            >
              <p className="h-[40px] w-[40px] rounded-[10px] bg-[#5A2C4C] flex justify-center item-center">
                <span className="relative text-[22px] mt-2 text-[#F06EB4]">
                  <TbArrowsDown />
                  <span className="absolute top-[-4px] left-[0px] text-[#fff] rounded-full text-[12px] bg-[#F06EB4] p-[1px]">
                    <LiaDollarSignSolid />
                  </span>
                </span>
              </p>
              <p className="text-[13px] mt-1 font-semibold">Total Revenue</p>
              <p className="flex justify-between items-center mt-2">
                <div className="text-3xl font-bold ">
                  $<CountUp end={12} duration={2}></CountUp>k
                </div>
                <div className="flex items-center text-[#E94C53] ">
                  <span className="text-[26px]">
                    <IoMdArrowDropdown />
                  </span>
                  <span className="text-[14px] font-semibold "> 3%</span>
                </div>
              </p>
            </div>
          </div>
          <div
            id="netProfit"
            className="h-[9rem] w-[33.2vw] bg-[#1F2029] rounded-[6px] p-4 flex"
          >
            <div className="w-[65%] flex flex-col">
              <div className="text-[13px]">Net Profit</div>
              <div id="price" className="text-[35px] font-bold mt-2">
                $<CountUp end={6759.25} duration={2} decimals={2}></CountUp>k
              </div>
              <div className="flex items-center text-[#67B25F]">
                <span className="text-[26px]">
                  <IoMdArrowDropup />
                </span>
                <span className="text-[14px] font-semibold "> 3%</span>
              </div>
            </div>
            <div className="w-[40%] gap-4 items-center flex flex-col relative">
              <div className="">
                <Progressbar />
              </div>
              <div
                className={`text-[11px] text-center ${
                  !isLargeScreen ? "w-[120px]" : "w-[auto]"
                }`}
              >
                *The values here has been rounded off
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap">
          <div>
            <Graph />
          </div>
          <div
            className={`bg-[#1F2029] rounded-[6px] p-5 flex flex-col gap-2 justify-between ${
              !isLargeScreen ? "w-[70vw]" : "w-[33.5vw]"
            }`}
            data-aos="zoom-in"
          >
            <div className="flex  items-center w-[100%] justify-between">
              <div className="flex gap-4 items-center">
                <span className="p-4 bg-[#5F3237] text-3xl text-[#F86C23] rounded-full">
                  <AiOutlineAim />
                </span>
                <p className="text-xl">Goals</p>
              </div>
              <div>
                <span className="text-2xl p-1.5 rounded-full bg-[#47484D] inline-block">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
            <div className="flex  items-center w-[100%] justify-between">
              <div className="flex gap-4 items-center">
                <span className="p-4 bg-[#293368] text-3xl text-[#576BBD] rounded-full">
                  <GiSlicedBread />
                </span>
                <p className="text-xl">Popular Dishes</p>
              </div>
              <div>
                <span className="text-2xl p-1.5 rounded-full bg-[#47484D] inline-block">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
            <div className="flex  items-center w-[100%] justify-between">
              <div className="flex gap-4 items-center">
                <span className="p-4 bg-[#214A60] text-3xl text-[#24A4DB] rounded-full">
                  <FaBowlFood />
                </span>
                <p className="text-xl">Menus</p>
              </div>
              <div>
                <span className="text-2xl p-1.5 rounded-full bg-[#47484D] inline-block">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mb-8">
          <div>
            <RecentOrder />
          </div>
          <div>
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
