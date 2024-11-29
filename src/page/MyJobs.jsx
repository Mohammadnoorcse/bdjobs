import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaVideoSolid } from "react-icons/lia";
import { CiLogin } from "react-icons/ci";
import Home from '../components/myjobs/Home';

const MyJobs = () => {
    const [active,setActive] = useState("home");
    const [Arrow,setArrow] = useState(false);
    const arrowHandler = (name) =>{
      setActive(name);
      if(Arrow===true){
        setArrow(false);
      }else{
        setArrow(true);
      }
    }

      const renderView = () => {
        switch (active) {
          case "home":
            return <Home />;
          // case "leaderboard":
          //   return <DashboardleaderBoard />;
          // case "order":
          //   return <DashboardOrder />;
          // case "product":
          //   return <DashboardProduct />;
          // case "salereport":
          //   return <DashboardSaleReport />;
          // case "messages":
          //   return <DashboardMessage />;
          // case "setting":
          //   return <DashboardSetting />;
          default:
            return <h1>404 Not Found</h1>;
        }
      };
   
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#EEEEEE]">
      <div className="content mt-4 flex gap-4 flex-row">
        {/* child-1 */}
        <div className="w-[262px] h-auto bg-[#FFFFFF] border border-[#e0e0e0] lg:flex  hidden flex-col gap-2 p-1 rounded-[4px]">
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
              onClick={() => arrowHandler("item-1")}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              MANAGE PROFILE
            </div>
            <div
              className={
                active === "item-1" && Arrow ? "flex flex-col gap-1" : "hidden"
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
          {/* item-2 */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-[#ffffff] text-[13px] text-[#008020] uppercase font-bold flex gap-1 items-center py-[8px] px-[20px] cursor-pointer"
              onClick={() => arrowHandler("item-2")}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              INVITATIONS
            </div>
            <div
              className={
                active === "item-2" && Arrow ? "flex flex-col gap-1" : "hidden"
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
          {/* item-3 */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-[#ffffff] text-[13px] text-[#008020] uppercase font-bold flex gap-1 items-center py-[8px] px-[20px] cursor-pointer"
              onClick={() => arrowHandler("item-3")}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              MY ACTIVITIES
            </div>
            <div
              className={
                active === "item-3" && Arrow ? "flex flex-col gap-1" : "hidden"
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
          {/* item-4 */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-[#ffffff] text-[13px] text-[#008020] uppercase font-bold flex gap-1 items-center py-[8px] px-[20px] cursor-pointer"
              onClick={() => arrowHandler("item-4")}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              POINTS & REWARDS
            </div>
            <div
              className={
                active === "item-4" && Arrow ? "flex flex-col gap-1" : "hidden"
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
          {/* item-5 */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-[#ffffff] text-[13px] text-[#008020] uppercase font-bold flex gap-1 items-center py-[8px] px-[20px] cursor-pointer"
              onClick={() => arrowHandler("item-5")}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              EMPLOYER
            </div>
            <div
              className={
                active === "item-5" && Arrow ? "flex flex-col gap-1" : "hidden"
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
          {/* item-6 */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-[#ffffff] text-[13px] text-[#008020] uppercase font-bold flex gap-1 items-center py-[8px] px-[20px] cursor-pointer"
              onClick={() => arrowHandler("item-6")}
            >
              <span className="text-[13px] text-[#008020] uppercase font-bold">
                <IoIosArrowDown />
              </span>
              PERSONALIZATION
            </div>
            <div
              className={
                active === "item-6" && Arrow ? "flex flex-col gap-1" : "hidden"
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
          {/* item-7 */}
          <div
            className={`hover:text-[#008020] border-l-[5px] border-[white] hover:border-[#008020] hover:bg-[#f5f5f5] text-[#616161] text-[14px] font-bold cursor-pointer ${
              active === "setting"
                ? "border-l-[5px] border-[#008020] bg-[#f5f5f5] text-[#008020]"
                : ""
            }`}
            onClick={() => setActive("setting")}
          >
            <div className="flex gap-1 items-center py-[8px] px-[20px]">
              <IoSettingsOutline />
              <span>Account Settings</span>
            </div>
          </div>
          {/* item-8 */}
          <div
            className={`hover:text-[#008020] border-l-[5px] border-[white] hover:border-[#008020] hover:bg-[#f5f5f5] text-[#616161] text-[14px] font-normal cursor-pointer ${
              active === "helpsvideos"
                ? "border-l-[5px] border-[#008020] bg-[#f5f5f5] text-[#008020]"
                : ""
            }`}
            onClick={() => setActive("helpsvideos")}
          >
            <div className="flex gap-1 items-center py-[8px] px-[20px]">
              <LiaVideoSolid />
              <span>Help Videos</span>
            </div>
          </div>
          {/* item-9 */}
          <div
            className={`hover:text-[#008020] border-l-[5px] border-[white] hover:border-[#008020] hover:bg-[#f5f5f5] text-[#616161] text-[14px] font-normal cursor-pointer ${
              active === "signout"
                ? "border-l-[5px] border-[#008020] bg-[#f5f5f5] text-[#008020]"
                : ""
            }`}
            onClick={() => setActive("signout")}
          >
            <div className="flex gap-1 items-center py-[8px] px-[20px]">
              <CiLogin />
              <span>sign out</span>
            </div>
          </div>
        </div>
        {/* child-2 */}
        <div className="w-full border border-[#e0e0e0] bg-[#FFFFFF] rounded-[4px]">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default MyJobs