import React from 'react'

const JobRequirement = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#EEEEEE]">
      <div className="content flex flex-col gap-4 border border-[red] mt-4 p-2">
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
        <div className="flex justify-between">
          <span>
            Application Deadline: <span>8 Jan 2025</span>
          </span>
        </div>
        {/* summery */}
        {/* requirements */}
        {/* nooor */}
      </div>
    </div>
  );
}

export default JobRequirement