import React from 'react'
import CIVICA from "../assets/Images/CIVICA.png"
import arrowdown from "../assets/Logos/arrowdown.png"

// Header Component
const HeaderCom = () => {
  return (
    <>
    <div className='h-screen w-full flex flex-col p-7 justify-center items-center'>
        <img src={CIVICA} className='w-auto h-auto' alt='' />

        <div className='relative h-auto w-auto text-center mt-12'>
            <p className='text-[#008999] text-2xl font-lato leading-normal'>30 YEARS OF EXPERIANCE</p>
            <h1 className='text-[#000000] text-6xl font-lato'>EXPERTISE</h1>
        </div>

        <div className='absolute flex flex-col bottom-0 gap-10 justify-end items-center'>
            <p className='font-lato text-xl'>MORE ABOUT OUR PARTNER</p>
            <img src={arrowdown} className='h-auto w-auto' alt='' />
        </div>        
    </div>

    </>
  )
}

export default HeaderCom