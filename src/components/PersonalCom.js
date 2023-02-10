import React from 'react'
import patharrow from "../assets/Logos/patharrow.png"

const PersonalCom = () => {
  return (
    <div className='h-screen w-full personal_image relative flex justify-end'>
        <h1 className='absolute lg:top-[10%] lg:right-[10%] top-[12%] right-[13%] md:right-[15%] lg:text-[40px] text-[20px] md:text-[26px] tracking-wider font-lato text-transparent: uppercase text-[#FFFFFF]'>Personalised for You</h1>
        <p className='absolute top-[25%] right-[10.5%] text-[#FFFFFF] lg:text-[20px] text-[11px] md:text-[15px] font-lato lg:text-transparent: uppercase'>Delivering thousands of personalised alerts <br />
          everyday, our USERS can be first in line when <br />
          that opportunity of a lifetime is here.</p>

        <div className='absolute flex gap-4 top-[50%] lg:top-[62%] right-[5%] tracking-wider'>
            <p className='lg:text-[21px] text-[13px] font-lato text-white'>CREATE USER ID</p>
            <img src={patharrow} className='h-auto w-auto' alt='' />
        </div>
    </div>
  )
}

export default PersonalCom