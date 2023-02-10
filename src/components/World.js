import React from 'react'
import WorldMap from "../assets/Images/World Map(dots).svg";

const World = () => {
  return (
    <div className='h-auto w-full relative flex justify-center items-center '>
        <div className='absolute gap-5 p-5 flex-col text-center'>
            <h1 className='lg:text-[40px] text-[30px] font-lato'>GLOBAL VISION</h1>
            <p className='lg:text-[20px] font-lato leading-9'>With a remote culture, diversity is naturally in our DNA.
                <br />Based across THE GLOBE, making up over 23 different nationalities.</p>
        </div>
        <img src={WorldMap} className='h-auto w-full' alt='' />
    </div>
  )
}

export default World