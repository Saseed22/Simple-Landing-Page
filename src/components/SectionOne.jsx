import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import FlagIMG from "../assets/Anim.jpg";


const SectionOne = () => {
  return (
    
    <div className="mt-40 mx-auto container">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <BsArrowLeftSquareFill /> more
        </h1>
        <h5 className="font-bold text-xl">history of newspaper</h5>
      </div>

      <div className="mt-20 md:flex gap-4">
        <div className="md:w-1/3 w-full">
          <img src={FlagIMG} alt="planet" className=" rounded-lg" />
          <h2 className="my-2">Title</h2>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2">
              <BsArrowLeftSquareFill /> view
            </h1>
            <h1>2023/04/15</h1>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <img src={FlagIMG} alt="planet" className=" rounded-lg" />
          <h2 className="my-2">Title</h2>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2">
              <BsArrowLeftSquareFill /> view
            </h1>
            <h1>2023/04/15</h1>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <img src={FlagIMG} alt="planet" className=" rounded-lg" />
          <h2 className="my-2">Title</h2>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2">
              <BsArrowLeftSquareFill /> view
            </h1>
            <h1>2023/04/15</h1>
          </div>
        </div>
      </div>
      </div>
      
  );
};

export default SectionOne;
