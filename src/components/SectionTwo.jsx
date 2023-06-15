import React from 'react'
import FlagIMg from '../assets/Anim.jpg';

const SectionTwo = () => {
  return (
    <div className='mt-20 mx-auto container'>
      <h1 className='text-right font-bold text-2xl my-5'>Search Articles by Product</h1>
      <div className='w-full rounded-lg bg-green-800 grid items-center  md:grid-cols-3'>
        <div className='hidden md:block md:col-span-2 w-full'>
          <div className='flex items-center justify-center gap-10 p-5'>
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          </div>
          <div className='flex items-center justify-center gap-10 p-5'>
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          <img src={FlagIMg} alt="fruits" className='w-[80px] h-[80px] rounded-full' />
          </div>
        </div>
        
        <div className='grid'>
          <button className='border-2 border-yellow-400 rounded-xl my-4 w-1/2 mx-auto py-4 text-white bg-yellow-600 hover:bg-transparent hover:text-yellow-300'>Garden products</button>
          <button className='border-2 border-yellow-400 rounded-xl my-4 w-1/2 mx-auto py-4 text-white bg-yellow-600 hover:bg-transparent hover:text-yellow-300'>Farm products</button>
          <button className='border-2 border-yellow-400 rounded-xl my-4 w-1/2 mx-auto py-4 text-white bg-yellow-600 hover:bg-transparent hover:text-yellow-300'>Vegtebail products</button>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo;