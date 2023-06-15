import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState();
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=" mx-auto text-center md:px-40 p-5 drop-shadow-lg flex items-center justify-between border border-b-2 relative">
      
      <div>BRAND.</div>
      <div>
        <ul className='hidden md:flex gap-8'>
          <li>AI</li>
          <li>newspaper</li>
          <li>video</li>
          <li>article</li>
          <li>homepage</li>
        </ul>
      </div>

      <button onClick={handleNav} className='md:hidden z-50'>
       {!nav? <AiOutlineMenu size={20} />:<AiOutlineClose size={20}/>}
      </button>

      <ul className={
        !nav ? 'hidden' : 'absolute top-20 left-6 mx-auto w-[450px] h-[20px] z-50  bg-gray-900 flex justify-evenly items-center text-lg  text-white py-10 sm:hidden'}>
          <li>AI</li>
          <li>newspaper</li>
          <li>video</li>
          <li>articlce</li>
          <li>homepage</li>
      </ul>
    </div>
  )
}

export default Navbar