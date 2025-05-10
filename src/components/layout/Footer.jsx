import React from 'react'
import { IoCallSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#263238]">
      <div className="content flex flex-col gap-4 py-4">
        {/* child-1 */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* items-1*/}
          <div className="flex flex-col gap-2">
            <h2 className="text-[15px] font-medium text-[white] mt-4 mb-2">
              <span>About Us</span>
            </h2>
            <a href="#" className="text-[14px] text-[white]">
              About Bdjobs
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Accessibility Statement
            </a>
            <a href="#" className="text-[14px] text-[white]">
              International Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Other Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Feedback
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Contact Us
            </a>
          </div>
          {/* items-2*/}
          <div className="flex flex-col gap-2">
            <h2 className="text-[15px] font-medium text-[white] mt-4 mb-2">
              <span>Job Seekers</span>
            </h2>
            <a href="#" className="text-[14px] text-[white]">
              About Bdjobs
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Accessibility Statement
            </a>
            <a href="#" className="text-[14px] text-[white]">
              International Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Other Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Feedback
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Contact Us
            </a>
          </div>
          {/* items-3*/}
          <div className="flex flex-col gap-2">
            <h2 className="text-[15px] font-medium text-[white] mt-4 mb-2">
              <span>Recruiter</span>
            </h2>
            <a href="#" className="text-[14px] text-[white]">
              About Bdjobs
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Accessibility Statement
            </a>
            <a href="#" className="text-[14px] text-[white]">
              International Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Other Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Feedback
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Contact Us
            </a>
          </div>
          {/* items-4*/}
          <div className="flex flex-col gap-2">
            <h2 className="text-[15px] font-medium text-[white] mt-4 mb-2">
              <span>Tools & Social Media</span>
            </h2>
            <a href="#" className="text-[14px] text-[white]">
              About Bdjobs
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Accessibility Statement
            </a>
            <a href="#" className="text-[14px] text-[white]">
              International Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Other Partners
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Feedback
            </a>
            <a href="#" className="text-[14px] text-[white]">
              Contact Us
            </a>
          </div>
        </div>
        {/* child-2 */}
        <div className="flex flex-col gap-1 mt-4">
          <div className="flex gap-1 flex-wrap text-[16px] text-[white] items-center">
            <span>Need any support ? Call to</span>
            <span className="text-[#ff8000] font-bold text-[24px]">
              <IoCallSharp />
            </span>
            <span className="text-[#ff8000] font-bold text-[24px]">
              09638666444,
            </span>
            <span className="text-[#ff8000] font-bold text-[24px]">
              01897627858
            </span>
          </div>
          <div className="flex gap-1 flex-wrap text-[16px] text-[white] items-center">
            <span>
              Our Contact Centre is available from 9 am to 8 pm (Saturday to
              Thursday).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer