import React from "react";

const MidSect = () => {
  return (
    <div className="flex flex-col items-center gap-6 justify-between my-20 md:flex-row md:items-start mx-10 md:mx-20 text-gray-400 md:gap-24">
      <div className="writeup text-center md:text-left w-[300px] md:w-[50%] gap-3 flex flex-col">
        <h2 className="text text-4xl font-bold leading-12 max-w-[400px]">
          What's different about Manage?
        </h2>
        <p className="max-w-[330px]">
          Manage provides all the functionality your team needs without the
          complexity. Our software is tailore-made for modern digital product
          teams.
        </p>
      </div>

      <div className="points flex flex-col gap-8 mt-6 md:mt-0 w-fit items-end md:w-[50%]">
        <div className="point1 float-right w-full flex flex-col gap-2 font-semibold ">
          <div className="head flex gap-4 items-center text font-bold bg-[#ffefeb] w-full rounded-l-full md:bg-transparent">
            <div className="no bg-orange text-white py-2 px-6 rounded-full font-semibold">
              01
            </div>
            Track company-wide progress
          </div>
          <p className="pr-8 text-md md:pl-21 md:pr-12 md:w-[100%] md:font-normal">
            See how your day-to-day task fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="point1 flex flex-col gap-2 font-semibold">
          <div className="head flex gap-4 items-center text font-bold bg-[#ffefeb] w-full rounded-l-full md:bg-transparent">
            <div className="no bg-orange text-white py-2 px-6 rounded-full font-semibold">
              02
            </div>
            Advanced built-in reports
          </div>
          <p className="pr-8 text-md md:pl-21 md:w-[100%] md:font-normal">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep stakeholders informed.
          </p>
        </div>
        <div className="point1 flex flex-col gap-2 font-semibold">
          <div className="head flex gap-4 items-center text font-bold bg-[#ffefeb] w-full rounded-l-full md:bg-transparent">
            <div className="no bg-orange text-white py-2 px-6 rounded-full font-semibold">
              03
            </div>
            Everything you need in one place
          </div>
          <p className="pr-8 text-md md:pl-21 md:w-[100%] md:font-normal">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers on all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidSect;
