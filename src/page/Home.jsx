import React from 'react'
import bg from "../assets/bg.jpg";
import { SlGraph } from "react-icons/sl";
import { LuMousePointerClick } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";

const Home = () => {
  return (
    <div
      className="w-full h-[315px] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content flex gap-4">
        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="text-[24px] text-[#000] font-[700] mt-[20px]">
            <span className="flex gap-2">
              <span>Find</span>
              <span>the</span>
              <span>right</span>
              <span>job</span>
            </span>
          </h2>
          <div className="flex gap-4 items-center">
            <a href="#">
              <div className="flex items-center gap-4">
                <div className="animation-1 w-[48px] h-[48px] border-2 border-[#2a5992] p-[4px] rounded-full">
                  <div className="w-[36px] h-[36px] text-[white] bg-[#2a5992] rounded-full text-center flex justify-center items-center text-[18px]">
                    <SlGraph />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-sm text-[#2a5992] uppercase font-medium">
                    Live Jobs
                  </h2>
                  <p className="text-xl font-bold text-[#2a5992]">4,613</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-4">
                <div className=" w-[48px] h-[48px] border-2 border-[#2a5992] p-[4px] rounded-full">
                  <div className="w-[36px] h-[36px] text-[white] bg-[#2a5992] rounded-full text-center flex justify-center items-center text-[18px]">
                    <GrUserManager />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-sm text-[#2a5992] uppercase font-medium">
                    VACANCIES
                  </h2>
                  <p className="text-xl font-bold text-[#2a5992]">22,717+</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-4">
                <div className=" w-[48px] h-[48px] border-2 border-[#2a5992] p-[4px] rounded-full">
                  <div className="w-[36px] h-[36px] text-[white] bg-[#2a5992] rounded-full text-center flex justify-center items-center text-[18px]">
                    <FaBuilding />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-sm text-[#2a5992] uppercase font-medium">
                    Companies
                  </h2>
                  <p className="text-xl font-bold text-[#2a5992]">2,580</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-4">
                <div className=" w-[48px] h-[48px] border-2 border-[#2a5992] p-[4px] rounded-full">
                  <div className="w-[36px] h-[36px] text-[white] bg-[#2a5992] rounded-full text-center flex justify-center items-center text-[18px]">
                    <LuMousePointerClick />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-sm text-[#2a5992] uppercase font-medium">
                    New Jobs
                  </h2>
                  <p className="text-xl font-bold text-[#2a5992]">395</p>
                </div>
              </div>
            </a>
          </div>
          {/* child-1 */}
          <div className="w-full h-[64px] bg-[#2A5992] mt-4 p-[15px] rounded-md flex gap-4">

          </div>
        </div>
        <div className="w-[262px] h-[315px]  bg-[#28558C]"></div>
      </div>
    </div>
  );
}

export default Home 