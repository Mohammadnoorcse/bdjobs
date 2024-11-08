import React from 'react'
import bg from "../assets/bg.jpg";
import { SlGraph } from "react-icons/sl";
import { LuMousePointerClick } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      {/* desktop screen  */}
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

      {/*  */}
    </>
  );
}

export default Home 