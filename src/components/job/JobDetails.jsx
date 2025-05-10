import React from 'react'
import {Link} from "react-router-dom"
import JobCard from './JobCard';
const slideValue = [
  {
    id: 1,
    img: "https://jobs.bdjobs.com/images/Keywards_icon.png",
    name: "Keyword (s)",
  },
  {
    id: 2,
    img: "https://jobs.bdjobs.com/images/Category_icon.png",
    name: "Category ",
  },
  {
    id: 3,
    img: "https://jobs.bdjobs.com/images/Industry_icon.png",
    name: "Industry ",
  },
  {
    id: 4,
    img: "https://jobs.bdjobs.com/images/Location_icon.png",
    name: "Location ",
  },
  {
    id: 5,
    img: "https://jobs.bdjobs.com/images/Calendar-deline.png",
    name: "Posted/Deadline",
  },
  {
    id: 6,
    img: "https://jobs.bdjobs.com/images/Newspaper_icon.png",
    name: "Newspaper Job",
  },
  {
    id: 7,
    img: "https://jobs.bdjobs.com/images/Other-Filter.png",
    name: "Other Filters",
  },
];
const JobDetails = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#EEEEEE]">
      <div className="content flex sm:flex-row flex-col my-4">
        {/* child-1 */}
        <div className="sm:w-[120px] w-full h-auto flex flex-col gap-3">
          {/* item-1 */}
          <div className="w-full text-center bg-[#424242] text-[#fff] p-3 rounded-tl-[4px]">
            <h2 className="text-[14px] font-normal">Active filters</h2>
          </div>
          {/* item-2 */}
          <div className="w-full flex sm:flex-col flex-row bg-[#424242] justify-between ">
            {slideValue.map((value) => (
              <div
                className="flex justify-center items-center flex-col gap-1 text-[11px] font-[600] text-[#ecf0f1] p-3 border-b border-[#303030] cursor-pointer hover:bg-[#4C4C4C]"
                key={value.id}
              >
                <img src={value.img} alt="" className="w-[27px] h-[22px]" />
                <span className="sm:flex hidden">{value.name}</span>
              </div>
            ))}
            <div className="w-full p-1 sm:flex hidden gap-1  justify-center items-center bg-[#424242] text-[11px] font-[600] text-[#ecf0f1] cursor-pointer hover:bg-[#4C4C4C]">
              <span className="sm:flex hidden">Clear All</span>
              <img
                src="https://jobs.bdjobs.com/images/Clear_Icon.png"
                alt=""
                className="w-[11px] h-[11px]"
              />
            </div>
          </div>
        </div>
        {/* child-2 */}
        <div className="w-full flex flex-col gap-3">
          {/* item-1 */}
          <div className="p-3 bg-[white] flex gap-1 text-[#757575] text-[12px] justify-end">
            <img
              src="https://jobs.bdjobs.com/images//Save-Filters-icon.svg"
              alt=""
            />
            <span> Save as Favourite</span>
          </div>
          {/* item-2 */}
          <div className="w-full h-auto bg-[#FFFFFF] rounded-sm p-4 flex flex-col gap-4">
            {/* card */}
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails