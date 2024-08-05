import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../../assets/feedbackImg1.jpg";
import image2 from "../../assets/feedbackImg2.jpg";
import image3 from "../../assets/feedbackImg3.jpg";
import image4 from "../../assets/feedbackImg4.jpg";
import image5 from "../../assets/feedbackImg5.jpg";

const CustomerFeedback = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  return (
    <div
      id="feedbacksection"
      className="w-[33.5vw] bg-[#1F2029] rounded-[8px]  p-3 overflow-auto max-h-[28rem]"
    >
      <div className="text-xl font-semibold mx-4  mt-2">CustomerFeedback</div>
      <div>
        <div className="mt-2 flex flex-col gap-2 border-b-[1px] border-[#2E2F38] p-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={image1}
                alt=""
              />
            </div>
            <div className="text-[17px] font-semibold">Jenny Wilson</div>
          </div>
          <div className="flex text-xl gap-1 text-[#FBDF20]">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span className="text-[#fff]">
              <FaStar />
            </span>
          </div>
          <div>
            <p className="text-[14px] font-light">
              The food was excellent and so was the service. I had the mushroom
              risotto with scallops which was awesome. I has a burger overs
              greens (gluten free) which was also very good. They were very
              conscientious about gluten allergies
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2 border-b-[1px] border-[#2E2F38] p-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={image2}
                alt=""
              />
            </div>
            <div className="text-[17px] font-semibold">Dianne Russell</div>
          </div>
          <div className="flex text-xl gap-1 text-[#FBDF20]">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span className="text-[#fff]">
              <FaStar />
            </span>
          </div>
          <div>
            <p className="text-[14px] font-light">
              We enjoyed egg benedict served on homemade focaccia bread and hot
              coffee. perfect service.
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2 border-b-[1px] border-[#2E2F38] p-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={image3}
                alt=""
              />
            </div>
            <div className="text-[17px] font-semibold">Hudson Wilson</div>
          </div>
          <div className="flex text-xl gap-1 text-[#FBDF20]">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div>
            <p className="text-[14px] font-light">
              The food was excellent and so was the service. I had the mushroom
              risotto with scallops which was awesome.
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2 border-b-[1px] border-[#2E2F38] p-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={image4}
                alt=""
              />
            </div>
            <div className="text-[17px] font-semibold">Jameson Peter</div>
          </div>
          <div className="flex text-xl gap-1 text-[#FBDF20]">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div>
            <p className="text-[14px] font-light">
              The food was excellent and so was the service. I had the mushroom
              risotto with scallops.
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2  p-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={image5}
                alt=""
              />
            </div>
            <div className="text-[17px] font-semibold">Braxton Wilson</div>
          </div>
          <div className="flex text-xl gap-1 text-[#FBDF20]">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div>
            <p className="text-[14px] font-light">
              The food was excellent and so was the service. I had the mushroom
              risotto with scallops which was awesome. I has a burger overs
              greens (gluten free) which was also very good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
