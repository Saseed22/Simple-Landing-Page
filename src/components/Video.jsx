import React from 'react'
import video from '../assets/Solar.mp4'

const Video = () => {
  return (
    <div className='my-20  mx-auto  '>
      <h1 className='my-6 text-right text-xl px-5'>All Video</h1>

      <div className='w-full mb-80 sm:mb-10 h-[300px]  bg-gray-300 md:flex gap-10 px-5'>
        
        <div className='h-[300px] overflow-hidden space-y-5'>


          <div className='flex items-center justify-between gap-10'>
            <div className=''>
              <h1 className='text-right mb-2 font-bold'>Tutorial Video</h1>
              <p className='text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, hic.</p>
            </div>
            <div>
              <video className='w-[200] h-[100px]' src={video} autoPlay muted loop></video>
            </div>
          </div>

          <div className='flex items-center justify-between gap-10'>
            <div className=''>
              <h1 className='text-right mb-2 font-bold'>Tutorial Video</h1>
              <p className='text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, hic.</p>
            </div>
            <div>
              <video className='w-[200] h-[100px]' src={video} autoPlay muted loop></video>
            </div>
          </div>

          <div className='flex items-center justify-between gap-10'>
            <div className=''>
              <h1 className='text-right mb-2 font-bold'>Tutorial Video</h1>
              <p className='text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, hic.</p>
            </div>
            
            <div>
              <video className='w-[200] h-[100px]' src={video} autoPlay muted loop></video>
            </div>
          </div>

        </div>

        <div>
          <video className='w-full h-[300px]' src={video} autoPlay muted loop></video>
        </div>


      </div>
    </div>
  )
}

export default Video