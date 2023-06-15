import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
// import { TbPointFilled } from "react-icons/tb";
import Time from "../assets/julie-molliver-Z3vFp7szCAY-unsplash.jpg";

const Timeline = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <BsArrowLeftSquareFill /> more
        </h1>
        <h5 className="font-bold text-xl">history of newspaper</h5>
      </div>

      <div className="mt-10 ">
        <div className="flex items-center justify-evenly p-2">
          <div className="hover:scale-110 duration-300 transition-all">
            <div className="md:w-[150px] md:h-[300px] ">
              <img
                className="object-cover w-full h-full opacity-20"
                src={Time}
                alt="/"
              />
            </div>
            <h1 className="text-sm md:text-xl text-center">Dust,planet</h1>
            <h3 className="text-sm text-center">number one</h3>
          </div>

          <div className="hover:scale-110 duration-300 transition-all">
            <div className="md:w-[150px] md:h-[300px] ">
              <img
                className="object-cover w-full h-full opacity-40"
                src={Time}
                alt="/"
              />
            </div>
            <h1 className="text-sm md:text-xl text-center">Dust,planet</h1>
            <h3 className="text-sm text-center">number one</h3>
          </div>

          <div className="hover:scale-110 duration-300 transition-all">
            <div className="md:w-[150px] md:h-[300px] ">
              <img
                className="object-cover w-full h-full opacity-60"
                src={Time}
                alt="/"
              />
            </div>
            <h1 className="text-sm md:text-xl text-center">Dust,planet</h1>
            <h3 className="text-sm text-center">number one</h3>
          </div>

          <div className="hover:scale-110 duration-300 transition-all">
            <div className="md:w-[150px] md:h-[300px] ">
              <img
                className="object-cover w-full h-full opacity-90"
                src={Time}
                alt="/"
              />
            </div>
            <h1 className="text-sm md:text-xl text-center">Dust,planet</h1>
            <h3 className="text-sm text-center">number one</h3>
          </div>
        </div>

        {/* <div className="mt-10 relative">


          <div className="border-2 border-green-600 rounded-full md:w-[800px] w-[450px] mx-auto " />

          


          <div className="flex items-center justify-around mt-3 ">
            
              <div className="absolute -top-2 left-[20%]">
                <TbPointFilled className="text-white border-2 rounded-full border-green-600 mx-auto mb-4" size={20} />
                <h1>winter 1401</h1>
              </div>
            

            
              <div className="absolute -top-2 left-[40%]">
              <TbPointFilled className="text-white border-2 rounded-full border-green-600 mx-auto mb-4" size={20} />
                <h1>spring 1402</h1>
              </div>
            

            
              <div className="absolute -top-2 left-[60%]">
              <TbPointFilled className="text-white border-2 rounded-full border-green-600 mx-auto mb-4" size={20} />
                <h1>summer 1402</h1>
              </div>
            

            
              <div className="absolute -top-2 left-[80%]">
              <TbPointFilled className="text-white border-2 rounded-full border-green-600 mx-auto mb-4" size={20} />
                <h1>summer 1402</h1>
              </div>
           

          </div>
        </div> */}

        <div className="h-[4px] bg-green-800 mx-10 my-10 ">
          <div className="h-[100%] "></div>

          <div className="-ml-[10px] -mr-[10px] -mt-[12px] flex justify-between ">


            <div className="timeline-item ">
              <div className="timeline-content ">winter 1401</div>
            </div>
            <div className="timeline-item "> 
              <div className="timeline-content">spring 1402</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">summer 1402</div>
            </div>
            <div className="timeline-item ">
              <div className="timeline-content">summer 1402</div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
