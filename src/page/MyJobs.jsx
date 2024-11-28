import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa";

const MyJobs = () => {
    const [active,setActive] = useState("home");
    const [Arrow,setArrow] = useState(false);
   
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#EEEEEE]">
      <div className="content mt-4 flex gap-4 flex-row">
        {/* child-1 */}
        <div className="w-[262px] h-auto bg-[#FFFFFF] border border-[#e0e0e0] flex flex-col gap-2 p-1 rounded-[4px]">
          <div
            className={`text-[#008020] text-[14px] font-normal cursor-pointer ${
              active === "home"
                ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                : ""
            }`}
            onClick={() => setActive("home")}
          >
            <div className="flex gap-1 items-center py-[8px] px-[20px]">
              <IoMdHome />
              <span>Home</span>
            </div>
          </div>
          {/* item-1 */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-[#ffffff] text-[13px] text-[#008020] uppercase font-bold flex gap-1 items-center py-[8px] px-[20px] cursor-pointer"
              onClick={()=>setArrow(!Arrow)}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              MANAGE PROFILE
            </div>
            <div
              className={
                Arrow  
                  ? "flex flex-col gap-1"
                  : "hidden"
              }
            >
              <div
                className={`text-[#616161] hover:text-[#008020] text-[13px] font-normal cursor-pointer border-l-[5px] border-[white]  hover:border-l-[5px] hover:border-[#008020] hover:bg-[#f5f5f5] ${
                  active === "vprofile"
                    ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                    : ""
                }`}
                onClick={() => setActive("vprofile")}
              >
                <div className="flex gap-1 items-center py-[8px] px-[20px]">
                  <FaRegAddressBook />
                  <span>View Profile</span>
                </div>
              </div>
              <div
                className={`text-[#616161] hover:text-[#008020] text-[13px] font-normal cursor-pointer border-l-[5px] border-[white]  hover:border-l-[5px] hover:border-[#008020] hover:bg-[#f5f5f5] ${
                  active === "vprofile"
                    ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                    : ""
                }`}
                onClick={() => setActive("vprofile")}
              >
                <div className="flex gap-1 items-center py-[8px] px-[20px]">
                  <FaRegAddressBook />
                  <span>View Profile</span>
                </div>
              </div>
              <div
                className={`text-[#616161] hover:text-[#008020] text-[13px] font-normal cursor-pointer border-l-[5px] border-[white]  hover:border-l-[5px] hover:border-[#008020] hover:bg-[#f5f5f5] ${
                  active === "vprofile"
                    ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                    : ""
                }`}
                onClick={() => setActive("vprofile")}
              >
                <div className="flex gap-1 items-center py-[8px] px-[20px]">
                  <FaRegAddressBook />
                  <span>View Profile</span>
                </div>
              </div>
              <div
                className={`text-[#616161] hover:text-[#008020] text-[13px] font-normal cursor-pointer border-l-[5px] border-[white]  hover:border-l-[5px] hover:border-[#008020] hover:bg-[#f5f5f5] ${
                  active === "vprofile"
                    ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                    : ""
                }`}
                onClick={() => setActive("vprofile")}
              >
                <div className="flex gap-1 items-center py-[8px] px-[20px]">
                  <FaRegAddressBook />
                  <span>View Profile</span>
                </div>
              </div>
              <div
                className={`text-[#616161] hover:text-[#008020] text-[13px] font-normal cursor-pointer border-l-[5px] border-[white]  hover:border-l-[5px] hover:border-[#008020] hover:bg-[#f5f5f5] ${
                  active === "vprofile"
                    ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                    : ""
                }`}
                onClick={() => setActive("vprofile")}
              >
                <div className="flex gap-1 items-center py-[8px] px-[20px]">
                  <FaRegAddressBook />
                  <span>View Profile</span>
                </div>
              </div>
              <div
                className={`text-[#616161] hover:text-[#008020] text-[13px] font-normal cursor-pointer border-l-[5px] border-[white]  hover:border-l-[5px] hover:border-[#008020] hover:bg-[#f5f5f5] ${
                  active === "vprofile"
                    ? "border-l-[5px] border-[#008020] bg-[#f5f5f5]"
                    : ""
                }`}
                onClick={() => setActive("vprofile")}
              >
                <div className="flex gap-1 items-center py-[8px] px-[20px]">
                  <FaRegAddressBook />
                  <span>View Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* child-2 */}
        <div></div>
      </div>
    </div>
  );
}

export default MyJobs