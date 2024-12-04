import React from 'react'
import bg from "../assets/bg.jpg";
import { SlGraph } from "react-icons/sl";
import { LuMousePointerClick } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import {  MdOutlineKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCirclePause } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  // aminur
  
  return (
    <>
      {/* desktop screen  section-1 */}
      <div
        className="w-full h-[315px] bg-cover bg-center lg:flex hidden justify-center items-center"
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
              <input
                type="text"
                placeholder="Search the keyword"
                className="w-[60%] rounded-md pl-3 text-sm"
              />
              <select
                name="cars"
                id="cars"
                className="w-[25%] rounded-md text-[#595959] text-sm"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <button className="w-[10%] bg-[#b8dbb8] text-[#3d3d3d] hover:bg-[#43a047] hover:text-[#ccc] text-sm rounded-md">
                Search
              </button>
            </div>
            {/* child-2 */}
            <div className="flex justify-between items-center gap-1 flex-wrap">
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Dhaka</span>
                <span>(2653)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Mymensingh</span>
                <span>(87)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Khulna</span>
                <span>(117)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Sylhet</span>
                <span>(140)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Chattogram</span>
                <span>(390)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Rajshahi</span>
                <span>(165)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Rangpur</span>
                <span>(108)</span>
              </a>
            </div>
          </div>
          <div className="w-[262px] h-[315px]  bg-[#28558C] p-[15px] text-[white] overflow-y-auto">
            <h2 className="mt-[15px] mb-[6px] text-sm font-semibold text-[white] uppercase ">
              Quick links
            </h2>
            <div className="flex flex-col gap-[4px]">
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Employer&nbsp;List&nbsp;(2562)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                New&nbsp;Jobs&nbsp;(338)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Deadline&nbsp;Tommorrow&nbsp;(432)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Internship&nbsp;Opportunity&nbsp;(63)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Contractual&nbsp;Jobs&nbsp;(179)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Part&nbsp;time&nbsp;(2562)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Overseas&nbsp;Jobs&nbsp;(2562)
              </a>
              <a
                href=""
                className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Work&nbsp;From&nbsp;(2562)
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* mobaile screen */}
      <div className="w-full h-auto lg:hidden flex justify-center items-center bg-[#2A5992] pt-4 pb-4">
        <div className="content flex flex-col gap-4">
          <div className="w-full h-full flex flex-col gap-2">
            <h2 className="text-[24px] text-[#ffd180] font-[700] mt-[20px]">
              <span className="flex gap-2">
                <span>Find</span>
                <span>the</span>
                <span>right</span>
                <span>job</span>
              </span>
            </h2>

            {/* child-1 */}
            <div className="w-full  bg-[#2A5992] rounded-md flex flex-col gap-4">
              <input
                type="text"
                placeholder="Search the keyword"
                className="w-full h-[34px] rounded-md pl-3 text-sm"
              />

              <button className="w-full h-[34px] bg-[#b8dbb8] text-[#3d3d3d] hover:bg-[#43a047] hover:text-[#ccc] text-sm rounded-md">
                Search
              </button>
            </div>
            {/* child-2 */}
            <div className="flex justify-between items-center gap-1 flex-wrap">
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Dhaka</span>
                <span>(2653)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Mymensingh</span>
                <span>(87)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Khulna</span>
                <span>(117)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Sylhet</span>
                <span>(140)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Chattogram</span>
                <span>(390)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Rajshahi</span>
                <span>(165)</span>
              </a>
              <a
                href=""
                className="bg-[#2a599294] text-[#fff] border border-transparent backdrop-blur-[100px] font-semibold text-sm rounded-md py-[4px] px-[6px] hover:bg-[#2A5992] transition-all duration-[0.2s] ease-in-out"
              >
                <span>Rangpur</span>
                <span>(108)</span>
              </a>
            </div>
            <div className="  text-[white] overflow-y-auto pt-4">
              <h2 className="mt-[15px] mb-[6px] text-sm font-semibold text-[white] uppercase ">
                Quick links
              </h2>
              <div className="flex gap-8 flex-wrap pt-4 ">
                {/* child-1 */}
                <div className="flex flex-col gap-[4px]">
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Employer&nbsp;List&nbsp;(2562)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    New&nbsp;Jobs&nbsp;(338)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Deadline&nbsp;Tommorrow&nbsp;(432)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Internship&nbsp;Opportunity&nbsp;(63)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Contractual&nbsp;Jobs&nbsp;(179)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Part&nbsp;time&nbsp;(2562)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Overseas&nbsp;Jobs&nbsp;(2562)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Work&nbsp;From&nbsp;(2562)
                  </a>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Employer&nbsp;List&nbsp;(2562)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    New&nbsp;Jobs&nbsp;(338)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Deadline&nbsp;Tommorrow&nbsp;(432)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Internship&nbsp;Opportunity&nbsp;(63)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Contractual&nbsp;Jobs&nbsp;(179)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Part&nbsp;time&nbsp;(2562)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Overseas&nbsp;Jobs&nbsp;(2562)
                  </a>
                  <a
                    href=""
                    className="text-[12px] font-normal text-[white] opacity-[0.8] flex items-center"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    Work&nbsp;From&nbsp;(2562)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-2 */}

      <div className="w-full h-auto pt-4 pb-4 flex justify-center items-center bg-[#EEEEEE]">
        <div className="content flex flex-col gap-4">
          {/* child-1 */}
          <div className="flex gap-4 lg:flex-row flex-col ">
            {/* item-1 */}
            <div className="lg:w-[80%] w-full p-[15px] flex flex-col gap-4 shadow-lg rounded-md border bg-[white]">
              <div className="flex justify-between items-center">
                <h2 className="flex items-center text-base text-[#2a5992] font-bold">
                  <HiOutlineMenuAlt3 />
                  <span>Browser Category</span>
                </h2>
                <div className="border flex items-center gap-1 text-[12px] border-[#757575] rounded-sm ">
                  <button className="bg-[#757575] text-[#fff] p-1 ">
                    Functional
                  </button>
                  <button className="p-1 bg-[#f5f5f5] text-[#616161]">
                    Industrial
                  </button>
                </div>
              </div>
              <div className="flex  gap-4 flex-wrap">
                <div className="flex flex-col gap-2">
                  <Link
                    to="/job/1"
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Accounting/Finance</span>
                    <span>(307)</span>
                  </Link>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Bank/Non-Bank Fin. Institution</span>
                    <span>(71)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Supply Chain/Procurement</span>
                    <span>(139)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Education/Training</span>
                    <span>(426)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Engineer/Architects</span>
                    <span>(309)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Garments/Textile</span>
                    <span>(479)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>HR/Org.Development</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Gen Mgt/Admin</span>
                    <span>(307)</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Accounting/Finance</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Bank/Non-Bank Fin. Institution</span>
                    <span>(71)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Supply Chain/Procurement</span>
                    <span>(139)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Education/Training</span>
                    <span>(426)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Engineer/Architects</span>
                    <span>(309)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Garments/Textile</span>
                    <span>(479)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>HR/Org.Development</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Gen Mgt/Admin</span>
                    <span>(307)</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Accounting/Finance</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Bank/Non-Bank Fin. Institution</span>
                    <span>(71)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Supply Chain/Procurement</span>
                    <span>(139)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Education/Training</span>
                    <span>(426)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Engineer/Architects</span>
                    <span>(309)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Garments/Textile</span>
                    <span>(479)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>HR/Org.Development</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Gen Mgt/Admin</span>
                    <span>(307)</span>
                  </a>
                </div>
              </div>
            </div>
            {/* item-2 */}
            <div className="lg:w-[18%] w-full flex flex-col gap-2">
              {/* child-1 */}
              <div className="w-full p-2 bg-[#FFFDEC] flex flex-col gap-2 shadow-lg rounded-sm">
                <h2 className="text-sm uppercase text-[#2a5992] font-bold">
                  {" "}
                  Govt Jobs
                </h2>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-[#525252]">
                    নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
                  </span>
                  <span className="text-[#525252] text-[11px]">বাস হেলপার</span>
                  <span className="text-sm font-medium text-[#525252]">
                    নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
                  </span>
                  <span className="text-[#525252] text-[11px]">
                    জুনিয়র ল্যাব টেকনিশিয়ান
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#29612b] text-[11px] font-bold uppercase">
                    View All (155)
                  </span>
                  <span className="text-[#29612b]  font-bold">
                    <FaCirclePause />
                  </span>
                  <span className="flex gap-2 items-center text-[#29612b] font-bold">
                    <MdOutlineKeyboardArrowRight />
                    <MdOutlineKeyboardArrowLeft />
                  </span>
                </div>
              </div>
              {/* child-2 */}
              <div className="w-full flex gap-2 p-1 bg-[#f3f7f3] rounded-md shadow-md">
                <img
                  src="https://bdjobs.com/images/Army-Banner.gif"
                  alt=""
                  className="w-[48%]"
                />
                <img
                  src="https://bdjobs.com/images/video-cv.gif"
                  alt=""
                  className="w-[48%]"
                />
              </div>
            </div>
          </div>
          {/* child-2 */}
          <div className="flex gap-4 lg:flex-row flex-col ">
            {/* item-1 */}
            <div className="lg:w-[80%] w-full p-[15px] flex flex-col gap-4 shadow-lg rounded-md border bg-[#f3f7f3git]">
              <div className="flex justify-between items-center">
                <h2 className="flex items-center text-base text-[#2a5992] font-bold">
                  <span> স্পেশাল স্কিল্‌ড জব্‌স</span>
                </h2>
              </div>
              <div className="flex  gap-4 flex-wrap">
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Accounting/Finance</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Bank/Non-Bank Fin. Institution</span>
                    <span>(71)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Supply Chain/Procurement</span>
                    <span>(139)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Education/Training</span>
                    <span>(426)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Engineer/Architects</span>
                    <span>(309)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Garments/Textile</span>
                    <span>(479)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>HR/Org.Development</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Gen Mgt/Admin</span>
                    <span>(307)</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Accounting/Finance</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Bank/Non-Bank Fin. Institution</span>
                    <span>(71)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Supply Chain/Procurement</span>
                    <span>(139)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Education/Training</span>
                    <span>(426)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Engineer/Architects</span>
                    <span>(309)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Garments/Textile</span>
                    <span>(479)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>HR/Org.Development</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Gen Mgt/Admin</span>
                    <span>(307)</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Accounting/Finance</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Bank/Non-Bank Fin. Institution</span>
                    <span>(71)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Supply Chain/Procurement</span>
                    <span>(139)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Education/Training</span>
                    <span>(426)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Engineer/Architects</span>
                    <span>(309)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Garments/Textile</span>
                    <span>(479)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>HR/Org.Development</span>
                    <span>(307)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-1 text-[14px] text-[#525252]"
                  >
                    <MdKeyboardArrowRight />
                    <span>Gen Mgt/Admin</span>
                    <span>(307)</span>
                  </a>
                </div>
              </div>
            </div>
            {/* item-2 */}
            <div className="lg:w-[18%] w-full flex flex-col gap-2">
              {/* child-1 */}
              <div className="w-full  shadow-lg rounded-sm">
                <img
                  src="https://bdjobs.com/Banners/home_right/Lean-Six-Sigma-Side-Banner-260x80.png?ver=01"
                  alt=""
                  className="w-full h-[80px]"
                />
              </div>
              {/* child-2 */}
              <div className="w-full rounded-md shadow-md border">
                <img
                  src="https://bdjobs.com/Banners/home_right/Sylhet-Job-Fair-Side-Banner-260x240.png?ver=01"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="w-full h-auto pt-4 pb-4 flex justify-center items-center bg-[white]">
        <div className="content flex flex-col gap-4">
          <h2 className="text-[16px] font-[700] text-[#2a5992] uppercase">
            Hot Jobs
          </h2>
          <div className="flex flex-wrap ">
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
            <div className="lg:w-[25%] sm:w-[33.33%] w-[48%]  p-[15px] flex gap-2 border border-[#ddd] rounded-sm">
              <div className="h-[54px] p-[3px] shadow-md rounded-md">
                <img
                  src="https://hotjobs.bdjobs.com/logos/chemonics48.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#2a5992] font-[400] text-[13px]">
                  Chemonics International Inc.
                </h3>
                <span className="text-[#525252] text-[12px]">
                  Administrative Officer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-4 */}
      <div className="w-full h-auto pt-4 pb-4 flex justify-center items-center bg-[#EEEEEE]">
        <div className="content flex flex-col gap-4">
          <h2 className="text-[16px] text-[#2F64A3] uppercase font-bold">
            <span>Tender/ Eoi</span>
          </h2>
          <div className="flex flex-wrap gap-4 ">
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
            <div className="lg:w-[32%] sm:w-[48%] w-full bg-[white] p-4 flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="w-[64px] h-[64px] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src="https://hotjobs.bdjobs.com/logos/nrc300.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-[#ac016d] text-[12px] font-bold">
                  <span>Norwegian Refugee Council,Bangladesh</span>
                </h2>
                <span className="text-[#525252] text-[12px] font-medium">
                  Tender Advertisement-Long-Term Framework Agreement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home 