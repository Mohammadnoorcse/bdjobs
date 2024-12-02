import React, { useState } from 'react'
import { ImStatsDots } from "react-icons/im";
import {Link} from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
const Home = () => {
  const [active,setActive] = useState('month');
  return (
    <div className="flex flex-col gap-4">
      {/* child-1 */}
      <div className="w-full h-[2.5rem] bg-[#546E7A] rounded-tl-[4px] rounded-tr-[4px] pl-4 flex items-center gap-1 text-[white] text-[14px] font-medium">
        <ImStatsDots />
        <span>My Stats</span>
      </div>
      {/* child-2 */}
      <div className="p-4 w-full h-auto flex flex-col gap-4">
        {/* item-1 */}
        <div className="bg-[#F3F3F3] w-full flex flex-col gap-2 p-4">
          <h2 className="text-[15px] font-semibold text-[#333]">
            Welcome to your MyBdjobs account!
          </h2>
          <p className="text-[#333] text-[14px] ">
            Here you can check your detailed stats like Companies viewed your
            profile, Online Application, Emailed CV, Shortlisted Jobs etc.
            Besides Stats from the Manage profile option, you can view your
            profile dashboard at a glance to add/update.
          </p>
        </div>
        {/* item-2 */}
        <div className="border border-[#d1c7cd] rounded-[4px] p-4 flex md:flex-row flex-col justify-between ">
          <div className="md:w-[33%] w-full md:border-r-[0.5px] flex flex-col gap-2 p-2">
            <h3 className="text-[14px] text-[#000] font-bold">Current Plan</h3>
            <h2 className="text-[14px] text-[green] font-bold">Free</h2>
            <div>
              <Link className="flex justify-center gap-2 items-center bg-[#008020] text-white md:w-[70%] w-[30%] p-2 border border-[#008020] rounded-[4px] text-[14px] font-medium">
                Get Bdjobs Pro
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="md:w-[33%] w-full md:border-r-[0.5px] flex flex-col gap-2 p-2">
            <h3 className="text-[14px] text-[#000] font-bold">My Points</h3>
            <h2 className="text-[14px] text-[#595959] font-normal flex items-center gap-2">
              Total points :<span className="font-semibold">139</span>
            </h2>
            <div className="w-full h-[0.8rem] bg-[#EDEDED] rounded-full relative ">
              <div className="absolute w-[50%] h-full bg-[green] top-0 left-0  rounded-l-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <Link className="flex justify-center gap-2 items-center bg-[#404040] text-white md:w-[70%] w-full p-2 border border-[#008020] rounded-[4px] text-[14px] font-medium">
                Get Bdjobs Pro
                <FaArrowRight />
              </Link>
              <Link className="text-[12px] font-normal text-[#0060DB]">
                How do I earn points?
              </Link>
            </div>
          </div>
          <div className="md:w-[33%] w-full  flex flex-col gap-2 p-2">
            <h3 className="text-[14px] text-[#000] font-bold">SMS Job Alert</h3>
            <span className="text-[13px] text-[#595959]">
              Buy SMS package to get instant offline job alerts
            </span>
            <div>
              <Link className="flex justify-center gap-2 items-center bg-[#404040] text-white md:w-[70%] w-full p-2 border border-[#008020] rounded-[4px] text-[14px] font-medium">
                Buy SMS
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        {/* item-3 */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-[2.5rem] bg-[#F0D5E5] flex ">
            <div className="w-[50%] flex justify-center items-center border-b-[2px] border-[#B32D7D] cursor-pointer">
              <h2 className="text-sm font-bold text-[#B32D7D]">General</h2>
            </div>
            <div className="w-[50%] flex justify-center items-center border-b-[2px] hover:border-[#B32D7D] cursor-pointer">
              <h2 className="text-sm font-bold text-[#595959] hover:text-[#B32D7D]">
                Bdjobs Pro
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex relative top-1">
              <button
                className={`w-[8rem] py-2  ${
                  active === "month"
                    ? "border-t border-l border-r z-10 bg-white "
                    : ""
                } text-[14px]`}
                onClick={() => setActive("month")}
              >
                This month
              </button>
              <button
                className={`w-[8rem] py-2  ${
                  active === "year"
                    ? "border-t border-l border-r z-10 bg-white text-[#008BEA]"
                    : ""
                } text-[14px]`}
                onClick={() => setActive("year")}
              >
                Last 1 year
              </button>
            </div>
            <div className="border p-4 flex flex-col gap-2">
              <h2 className="text-[15px] font-medium">My Activitie</h2>
              <div className="border rounded-[4px] flex sm:justify-between sm:flex-row flex-col ">
                <div className="sm:w-[33%] w-full p-2 flex flex-col gap-6 sm:border-r border-b ">
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Online Application <span>0</span>
                  </h2>
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Emailed CV <span>0</span>
                  </h2>
                </div>
                <div className="sm:w-[33%] w-full p-2 flex flex-col gap-6 sm:border-r border-b ">
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Shortlisted Jobs <span>0</span>
                  </h2>
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Favorite search <span>0</span>
                  </h2>
                </div>
                <div className="sm:w-[33%] w-full p-2 flex flex-col gap-6  ">
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Following Employer(s) <span>0</span>
                  </h2>
                </div>
              </div>
              <h2 className="text-[15px] font-medium">Profile View Summary</h2>
              <div className="flex justify-between items-center flex-wrap">
                <span className="flex gap-2 items-center flex-wrap text-[12px] text-[#004D13]">
                  Profile Visibility to Employer(s):
                  <span className="flex items-center gap-1 font-bold">
                    <FaUnlockAlt />
                    Public
                  </span>
                  <span className="text-[12px] font-bold text-[#0060DB] underline cursor-pointer">
                    Change
                  </span>
                </span>
                <span className="text-[13px] font-bold text-[#0060DB] cursor-pointer">
                  Manage Profile
                </span>
              </div>
              <div className="border rounded-[4px] flex sm:justify-between sm:flex-row flex-col ">
                <div className="sm:w-[33%] w-full p-2 flex flex-col gap-6 sm:border-r border-b ">
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Bdjobs Profile <span>0</span>
                  </h2>
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Total Company Viewed <span>0</span>
                  </h2>
                </div>
                <div className="sm:w-[33%] w-full p-2 flex flex-col gap-6 sm:border-r border-b ">
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Personalized CV <span>0</span>
                  </h2>
                </div>
                <div className="sm:w-[33%] w-full p-2 flex flex-col gap-6  ">
                  <h2 className="flex justify-between text-[13px] font-semibold text-[#4D4D4D]">
                    Video CV <span>0</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home