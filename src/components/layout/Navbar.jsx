import React, { useState } from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import {Link} from "react-router-dom";
const Navbar = () => {
    const [active,setActive] = useState("");
    const [ismenu,setIsMenu] = useState(false);
  return (
    <>
      <div className="w-full h-[90px] flex justify-center items-center">
        <div className="w-full content">
          <img
            src="https://bdjobs.com/images/pro-top-banner-1140x90.jpg?ver=01"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full h-[37px] lg:flex hidden justify-center items-center bg-[#37474F]">
        <div className="content flex justify-between items-center">
          {/* item-1 */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 bg-[#2E619E] font-[600] text-white text-[11px] uppercase"
            >
              JOBS
            </Link>

            <Link
              to="/myjobs"
              className="p-2  font-[400] text-[#bdbdbd] hover:text-white hover:bg-[#007A1E] text-[11px] uppercase"
            >
              my bdjobs
            </Link>
            <Link
              to="/"
              className="p-2  font-[400] text-[#bdbdbd] hover:text-white hover:bg-[#007A1E] text-[11px] uppercase"
            >
              e-learning
            </Link>
            <Link
              to="/"
              className="p-2  font-[400] text-[#bdbdbd] hover:text-white hover:bg-[#007A1E] hover:font-[600] text-[11px] uppercase"
            >
              tender/eoi
            </Link>
            <Link href="">
              <img src="https://bdjobs.com/images/recruiter.svg" alt="" />
            </Link>
          </div>
          {/* item-2 */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="w-full h-full text-[#bdbdbd] hover:bg-[red] hover:text-white px-2 py-2.5"
            >
              <FaYoutube />
            </Link>
            <Link
              to="/"
              className="w-full h-full text-[#bdbdbd] hover:bg-[red] hover:text-white px-2 py-2.5"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="/"
              className="w-full h-full text-[#bdbdbd] hover:bg-[red] hover:text-white px-2 py-2.5"
            >
              <SiGmail />
            </Link>
            <Link
              to="/"
              className="w-full h-full text-[#bdbdbd] hover:bg-[red] hover:text-white px-2 py-2.5"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="/"
              className="w-full h-full text-[#bdbdbd] hover:bg-[red] hover:text-white px-2 py-2.5"
            >
              <CiCamera />
            </Link>
            <div className="border border-[white] flex items-center text-[11px] gap-2  font-medium text-white ">
              <div className="bg-white py-[0.5px] px-1 text-[#263238] cursor-pointer">
                <span>Eng</span>
              </div>
              <div className="pr-1 cursor-pointer">
                <span>Bangla</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[60px] flex justify-center items-center">
        <div className="content flex justify-between items-center">
          <Link to="/">
            <img
              src="https://bdjobs.com/images/bdjobsLogo.svg"
              alt=""
              className="sm:max-w-[164px] max-w-[120px]"
            />
          </Link>
          {/* child-2 */}
          <div className="lg:flex hidden items-center  ">
            <Link
              to="/"
              className="text-[13px] text-[#424242] px-[15px] py-[20px] relative hover:bg-[#F5F5F5]"
            >
              <img
                src="https://bdjobs.com/upcoming/images/BdjobsPro.svg"
                alt=""
              />
              <span className="text-[#B3003C] absolute top-[0px] right-0 pt-[1px] pr-[7px] pb-[2px] pl-[7px] border border-[#B3003C] rounded-[50px] text-[10px]">
                new
              </span>
            </Link>
            <Link
              to="/"
              className="text-[13px] text-[#424242] px-[15px] py-[18px] relative hover:bg-[#F5F5F5] hover:text-[#6E92BD]"
            >
              Video CV
            </Link>
            <Link
              to="/"
              className="text-[13px] text-[#424242] px-[15px] py-[18px] relative hover:bg-[#F5F5F5] hover:text-[#6E92BD]"
            >
              Career Resources
            </Link>
            <Link
              to="/"
              className="text-[13px] text-[#424242] px-[15px] py-[18px] relative hover:bg-[#F5F5F5] hover:text-[#6E92BD]"
            >
              Sign in
              <span className="text-[#000]"> or </span>
              Create
              <span> Account </span>
            </Link>
            <Link
              to="/"
              className="text-[13px] text-[#424242] px-[15px] py-[18px] relative hover:bg-[#F5F5F5] hover:text-[#6E92BD]"
            >
              Contact Us
            </Link>
          </div>
          {/* child-3 */}
          <div className="lg:hidden flex items-center">
            <Link
              to="/"
              className="text-[13px] text-[#1976d2] px-[15px] py-[18px] relative hover:bg-[#F5F5F5] hover:text-[#6E92BD] font-bold"
            >
              Sign in
              <span className="text-[#000]"> or </span>
              Create
              <span> Account </span>
            </Link>
            <span
              className="border border-[#e0e0e0] py-[7px] px-[10px] rounded-md cursor-pointer"
              onClick={() => setIsMenu(true)}
            >
              <IoIosMenu />
            </span>
          </div>
          {/* child-4 */}
          <div
            className={
              ismenu
                ? "absolute top-0 right-0 w-[240px] h-full p-4 bg-[white] z-10 flex flex-col gap-4  "
                : "hidden"
            }
          >
            <div className="text-[#a6a6a6] text-[14px] font-bold  border-b border-[#ddd] uppercase flex items-center gap-4 pb-[10px]">
              <span
                className="text-[#ff3d00] cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                x
              </span>
              <span>Close</span>
            </div>
            <Link to="/" className="text-[13px] text-[#212121]">
              My Bdjobs
            </Link>
            <Link to="/">
              <img
                src="https://bdjobs.com/upcoming/images/BdjobsPro.svg"
                alt=""
              />
            </Link>
            <Link to="/" className="text-[13px] text-[#212121]">
              My Bdjobs
            </Link>
            <Link to="/" className="text-[13px] text-[#212121]">
              My Bdjobs
            </Link>
            <Link to="/" className="text-[13px] text-[#212121]">
              My Bdjobs
            </Link>
            <Link to="/" className="text-[13px] text-[#212121]">
              My Bdjobs
            </Link>
            <Link to="/" className="text-[13px] text-[#212121]">
              My Bdjobs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar