import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";


const Flag = () => {

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1671418285899-58fb1471c038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1671400833073-0a066e059f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1671433002028-f72f14b56b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1671250216336-fe1e65663832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1671394163520-4e0b11125f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
  ];

  const [pic, setPic] = useState(4);
  const pervSlide = () => {
    const firstSlide = pic === 0;
    const newPic = firstSlide ? slides.length - 1 : pic - 1;
    setPic(newPic);
  };
  const nextSlide = () => {
    const firstSlide = pic === slides.length - 1;
    const newPic = firstSlide ? 0 : pic + 1;
    setPic(newPic);
  };
 
  return (
    <div className="mx-auto container">
      <h1 className="text-right my-8  font-bold text-2xl">
        First article about planets
      </h1>
      <div className="max-w-7xl w-full  text-center">
      <div className="max-w-[1400px] h-[630px] m-auto py-10  relative group">
      <div
        style={{ backgroundImage: `url(${slides[pic].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>

      <div className="hidden group-hover:block absolute left-[50%] -translate-y-0 
      translate-x-[-50] top-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={pervSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute left-[50%] -translate-y-0 
      translate-x-[-50] bottom-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      
    </div>
      </div>
    </div>
  );
};

export default Flag;
