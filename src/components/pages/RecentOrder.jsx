import React, { useEffect, useState } from "react";
import image1 from "../../assets/TableDp1.jpeg";
import image2 from "../../assets/TableDp2.jpeg";
import image3 from "../../assets/TableDp3.jpeg";
import image4 from "../../assets/TableDp4.jpeg";
import image5 from "../../assets/TableDp5.jpeg";
import image6 from "../../assets/TableDp6.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentOrder = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 430);
  // ?animation:
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div
      className="bg-[#202028] min-w-[54vw] h-[28rem] p-4 text-[#F3F5F9] rounded-[8px]"
      data-aos="zoom-in"
    >
      <div id="recentorder" className="text-2xl font-semibold">RecentOrder</div>
      <div>
        <table id="table" className="">
          <thead>
            <tr className="bg-[#202028] text-left ">
              <th className="p-2">Customer</th>
              <th id="order" className="p-2">Order No.</th>
              <th id="order" className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody className=" text-[#F3F5F9] text-[13px]">
            <tr className=" transition border-b-[1px] border-[#2E2F38]">
              <td className="p-2 flex gap-3 items-center w-[19vw]">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={image1}
                  alt=""
                />
                <p>Wade Warren</p>
              </td>
              <td id="order" className="p-2 w-[12.5vw] ">15478256</td>
              <td id="order" className="p-2 w-[12.5vw]">$124.00</td>
              <td>
                <span className="bg-[#1A4942] text-[#0D7F62] px-[12px] text-[12px] py-[3px] rounded-xl">
                  Delivered
                </span>
              </td>
            </tr>
            <tr className=" transition border-b-[1px] border-[#2E2F38]">
              <td className="p-2 flex gap-3 items-center w-[19vw]">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={image2}
                  alt=""
                />
                <p>Wade Warren</p>
              </td>
              <td id="order" className="p-2 w-[12.5vw] ">15478256</td>
              <td id="order" className="p-2 w-[12.5vw]">$124.00</td>
              <td>
                <span className="bg-[#1A4942] text-[#0D7F62] px-[12px] text-[12px] py-[3px] rounded-xl">
                  Delivered
                </span>
              </td>
            </tr>
            <tr className=" transition border-b-[1px] border-[#2E2F38]">
              <td className="p-2 flex gap-3 items-center w-[19vw]">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={image3}
                  alt=""
                />
                <p>Wade Warren</p>
              </td>
              <td id="order" className="p-2 w-[12.5vw] ">15478256</td>
              <td id="order" className="p-2 w-[12.5vw]">$124.00</td>
              <td>
                <span className="bg-[#5C3539] text-[#C76571] px-[12px] text-[12px] py-[3px] rounded-xl">
                  Cancelled
                </span>
              </td>
            </tr>
            <tr className=" transition border-b-[1px] border-[#2E2F38]">
              <td className="p-2 flex gap-3 items-center w-[19vw]">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={image4}
                  alt=""
                />
                <p>Wade Warren</p>
              </td>
              <td id="order" className="p-2 w-[12.5vw] ">15478256</td>
              <td id="order" className="p-2 w-[12.5vw]">$124.00</td>
              <td>
                <span className="bg-[#5C3539] text-[#C76571] px-[12px] text-[12px] py-[3px] rounded-xl">
                  Pending
                </span>
              </td>
            </tr>
            <tr className=" transition border-b-[1px] border-[#2E2F38]">
              <td className="p-2 flex gap-3 items-center w-[19vw]">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={image5}
                  alt=""
                />
                <p>Wade Warren</p>
              </td>
              <td id="order" className="p-2 w-[12.5vw] ">15478256</td>
              <td id="order" className="p-2 w-[12.5vw]">$124.00</td>
              <td>
                <span className="bg-[#1A4942] text-[#0D7F62] px-[12px] text-[12px] py-[3px] rounded-xl">
                  Delivered
                </span>
              </td>
            </tr>
            <tr className=" transition ">
              <td className="p-2 flex gap-3 items-center w-[19vw]">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={image6}
                  alt=""
                />
                <p>Wade Warren</p>
              </td>
              <td id="order" className="p-2 w-[12.5vw] ">15478256</td>
              <td id="order" className="p-2 w-[12.5vw]">$124.00</td>
              <td>
                <span className="bg-[#1A4942] text-[#0D7F62] px-[12px] text-[12px] py-[3px] rounded-xl">
                  Delivered
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
