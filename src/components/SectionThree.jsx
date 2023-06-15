import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import FlagIMG from "../assets/Anim.jpg";

const SectionThree = () => {
  return (
    <div className="mt-20 px-5 mx-auto md:container">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <BsArrowLeftSquareFill /> more
        </h1>
        <h5 className="font-bold text-xl">history of newspaper</h5>
      </div>



      <div className="grid md:grid-cols-3 items-center justify-center">

        <div className="md:col-span-2 ">
          <div className="flex items-center justify-evenly my-6 gap-2">
            <div>
              <img
                className="w-[250px] h-[150px] rounded-lg"
                src={FlagIMG}
                alt="articles"
              />
              <h1>title</h1>
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-2">
                  <BsArrowLeftSquareFill /> view
                </h1>
                <h1>2023/04/15</h1>
              </div>
            </div>
            <div>
              <img
                className="w-[250px] h-[150px] rounded-lg"
                src={FlagIMG}
                alt="articles"
              />
              <h1>title</h1>
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-2">
                  <BsArrowLeftSquareFill /> view
                </h1>
                <h1>2023/04/15</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly my-6 gap-2">
            <div >
              <img
                className="w-[250px] h-[150px] rounded-lg"
                src={FlagIMG}
                alt="articles"
              />
              <h1>title</h1>
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-2">
                  <BsArrowLeftSquareFill /> view
                </h1>
                <h1>2023/04/15</h1>
              </div>
            </div>
            <div>
              <img
                className="w-[250px] h-[150px] rounded-lg"
                src={FlagIMG}
                alt="articles"
              />
              <h1>title</h1>
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-2">
                  <BsArrowLeftSquareFill /> view
                </h1>
                <h1>2023/04/15</h1>
              </div>
            </div>
          </div>
        </div>


        <div className="md:col-span-1  py-6 w-full h-[100%]">
          <img className="object-fill w-full h-full" src={FlagIMG} alt="Poster" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
