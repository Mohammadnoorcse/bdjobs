import React from 'react'
import { Link } from "react-router-dom";
const JobCard = () => {
  return (
    <Link
      to="/"
      className="bg-[#FBFBFB] border border-[#d5d5d5] rounded-md text-[#656565] flex flex-col gap-1 p-3 hover:bg-[#F5F5F5]"
    >
      <h2 className="text-[18px] font-[600] text-[#43A047]">
        {" "}
        Accountant and Odoo Assistant
      </h2>
      <span className="text-[14px] text-[#333333] font-[600]">
        Digital Pylot
      </span>
      <div className="flex gap-1 items-center ">
        <img
          src="https://jobs.bdjobs.com/images/Location.svg"
          alt=""
          className="w-[14px] h-[14px]"
        />
        <span className="text-[14px] text-[#656565]">Khilkhet</span>
      </div>
      <div className="flex gap-1 items-center ">
        <img
          src="https://jobs.bdjobs.com/images/Edu-cap.svg"
          alt=""
          className="w-[14px] h-[14px]"
        />
        <span className="text-[14px] text-[#656565]">
          Master of Business Administration (MBA)
        </span>
      </div>
      <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col gap-1 sm:gap-0">
        <div className="flex gap-1 items-center ">
          <img
            src="https://jobs.bdjobs.com/images/Exp_brief.svg"
            alt=""
            className="w-[14px] h-[14px]"
          />
          <span className="text-[14px] text-[#656565]">At least 4 year(s)</span>
        </div>
        <div className="flex items-center gap-1 ">
          <img
            src="https://jobs.bdjobs.com/images/Calendar-deline.svg"
            alt=""
            className="w-[14px] h-[14px]"
          />
          <span className="text-[14px] text-[#656565]"> Deadline: </span>
          <span className="text-[14px] text-[#656565]">
            <strong>25 Nov</strong> 2024
          </span>
        </div>
      </div>
    </Link>
  );
}

export default JobCard