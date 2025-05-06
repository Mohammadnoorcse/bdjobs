import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocalPrintshop } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { RiAlertFill } from "react-icons/ri";

const JobRequirement = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[white]">
      <div className="content flex flex-col gap-4 mt-4 p-2">
        {/* header change */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#333] text-[16px] font-semibold">
            E-WELL JOINT VENTURE LIMITED
          </h2>
          <h2 className="text-[#2F64A3] text-[18px] font-semibold">
            Chief Financial Officer
          </h2>
        </div>

        {/* sub-header not change */}
        <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-2 flex-wrap ">
          <span>
            Application Deadline: <span>8 Jan 2025</span>
          </span>
          <div className="flex gap-2">
            <Link className="bg-[#008020] px-2 py-1 rounded-sm text-white text-sm">
              Apply Now
            </Link>
            <Link className="border border-[#1877F2] px-2 py-1 rounded-sm text-[#595959] text-sm flex gap-2 items-center">
              <FaStar />
              Shortlist
            </Link>
            <Link className="border border-[#1877F2] px-2 py-1 rounded-sm text-[#595959] text-sm flex gap-2 items-center">
              <span className="flex gap-1 items-center">
                <CiShare2 />
                share:
              </span>
              <span className="text-xl">
                <FaFacebook />
              </span>
              <span className="text-xl">
                <FaLinkedinIn />
              </span>
              <span className="text-xl">
                <RiWhatsappFill />
              </span>
            </Link>
            <Link className="border border-[#1877F2] px-2 py-1 rounded-sm text-[#595959]">
              <MdLocalPrintshop />
            </Link>
          </div>
        </div>
        {/* summery */}
        <div className="flex border rounded-md bg-[#F4F4F4] p-4 mt-4 flex-col gap-2">
          <h2 className="font-normal text-base text-[#b32d7d]">Summary</h2>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal">
                Vacancy:<span className="font-bold"> 02</span>
              </p>
              <p className="text-sm font-normal">
                Salary: <span className="font-medium"> Negotiable</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal">
                Age: <span className="font-medium"> 24 to 40 years</span>
              </p>
              <p className="text-sm font-normal">
                Experience: <span className="font-medium"> 3 to 7 years</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal">
                Location: <span className="font-medium"> Dhaka (Mirpur)</span>
              </p>
              <p className="text-sm font-normal">
                Published: <span className="font-medium"> 13 Jan 2025</span>
              </p>
            </div>
          </div>
        </div>
        {/* message-1 */}
        <div className="p-4 border border-[#47A0DF] rounded-md bg-[#ECF6FF]">
          <h1 className="text-base font-normal text-[#2f64a3]">
            Applicants are encouraged to submit
            <span className="font-bold"> Video CV.</span>
          </h1>
        </div>
        {/* message-2 */}
        <div className="p-4 border border-[#008020] ">
          <p className="text-sm text-[#333333]">
            To access Application Insights
            <span className="text-[#008020] underline cursor-pointer">
              Get Bdjobs Pro
            </span>
          </p>
        </div>

        {/* requirement */}
        <div className="p-4 border rounded-md flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-bold text-[#b32d7d]">Requirements</h1>
            <h2 className="text-sm font-medium">Education</h2>
            <p className="text-sm text-[#333333]">
              Master of Business Administration (MBA) in Accounting Bachelor of
              Business Administration (BBA) in Finance MBA (CA/ CMA partly
              qualified is preferable) Finance backgrounds with Advance level
              excel skill
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-bold text-[#b32d7d]">
              Responsibilities & Context
            </h1>

            <p className="text-sm text-[#333333]">
              We are 100% Export Oriented Garments Manufacturing Company,
              looking to get application from some professional & qualified
              applicants to work with our MIS & Internal Audit Team. You may
              apply, if you are organized with strong attention to details; have
              a can-do attitude happy to learn new skills and great
              communication skills with professional etiquette. (No need to
              apply who have interviewed within last six months for the same)
              Brief JD: Conduct regular Audit, surprise Audit, special Audit
              assign by the management. Check and verify all kinds of bill
              voucher of ensuring the accuracy of financial transactions. Ensure
              that all sorts of requisition, delivery challan, bill, voucher,
              etc. are being checked and verified in the prescribed manner.
              Check daily local purchase bills, petty cash book, and all types
              of payments & receipts vouchers. Check and verify L/C related
              vouchers (supplied by commercial department) and preserve by
              accounts department.· Check and verify daily fuel and
              transportation expenses bills, mileage consumption, generator fuel
              consumption, Reporting to line manager on weekly and monthly
              basis. Physical verification of fixed assets and store items,
              Market survey & pre-audit to verify quotation. Monitor internal
              control system closely & Communicate audit issues along with
              documents to supervisor. Coordinate/communicate with concerned
              department in relation to the audit. Drive towards regular
              professional and personal development through brainstorming,
              training etc. Perform other relevant duties as required for the
              department head as well as the organization.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-bold text-[#b32d7d]">
              Responsibilities & Context
            </h1>
            <div className="flex flex-row gap-4 flex-wrap ">
              <span className="p-2 rounded-full bg-[#f4f4f4] text-[12px] text-[#333333] border">
                Financial Statement
              </span>
              <span className="p-2 rounded-full bg-[#f4f4f4] text-[12px] text-[#333333] border">
                Internal Audit
              </span>
              <span className="p-2 rounded-full bg-[#f4f4f4] text-[12px] text-[#333333] border">
                Inventory Audit
              </span>
              <span className="p-2 rounded-full bg-[#f4f4f4] text-[12px] text-[#333333] border">
                MIS Reporting
              </span>
              <span className="p-2 rounded-full bg-[#f4f4f4] text-[12px] text-[#333333] border">
                Reporting and Documentation
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-md flex flex-col gap-1 bg-[#F4F4F4]">
          <div className="flex justify-between">
            <h1 className="text-base font-semibold text-[#B32D7D]">
              Company Information
            </h1>
            <button className="px-4 py-1 border-2 border-[#CCE7FF] text-base font-medium rounded">
              Follow
            </button>
          </div>
          <p className="text-[#333333] text-sm font-normal">
            MNRB Food & Beverages
          </p>
          <h5 className="text-[#333333] text-sm font-semibold">Address:</h5>
          <p className="text-[#333333] text-sm font-normal">
            almas cinema hall moor,kazir dewri, chattogram
          </p>
          <h5 className="text-[#333333] text-sm font-semibold">Business:</h5>
          <p className="text-[#333333] text-sm font-normal">Food business</p>
        </div>
        <div className="p-4 border rounded-md flex flex-col gap-1 bg-[#F4F4F4]">
          <div className="flex justify-between">
            <h1 className="text-base font-semibold text-[#BF3835]">
              Report this Job / Company (রিপোর্ট)
            </h1>
            <button className="px-4 py-1 border border-[#BF3835] text-base font-medium rounded flex items-center gap-1">
              <span className="text-[#BF3835]">
                <RiAlertFill />
              </span>
              রিপোর্ট
            </button>
          </div>
          <p className="text-[#333333] text-sm font-normal mt-2">
            এই চাকরির জন্য বিজ্ঞাপন দাতা প্রতিষ্ঠান আপনার কাছ থেকে কোন অর্থ
            চাইলে অথবা কোন ধরনের ভুল বা বিভ্রান্তিকর তথ্য দিলে অতি সত্ত্বর
            আমাদেরকে জানান অথবা জবটি রিপোর্ট করুন। চাকরি পাওয়ার জন্য কোন
            ব্যাক্তি / প্রতিষ্ঠানকে অর্থ প্রদান করবেন না। কোন প্রকার অর্থ
            লেনদেনের দায়িত্ব বিডিজবস বহন করবে না।
          </p>
          <h5 className="text-[#333333] text-sm font-semibold flex items-center gap-1">
            <span className="text-[#215EA0]">
              <IoCallSharp />
            </span>
            09638666444, 01897627858
          </h5>
          <h5 className="text-[#333333] text-sm font-semibold flex items-center gap-1">
            <span className="text-[#215EA0]">
              <MdMessage />
            </span>
            complain@bdjobs.com
          </h5>
        </div>
      </div>
    </div>
  );
};

export default JobRequirement;
