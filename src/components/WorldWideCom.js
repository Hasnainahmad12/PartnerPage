import React from 'react'
import ZIMOCIVICA from "../assets/Images/ZIMOCIVICA.png";
import image from "../assets/Images/image.png";

const WorldWideCom = () => {
  return (
    <>
<div className='h-auto w-full p-7 flex flex-wrap justify-center items-center'>
    <div className=''>
        <div className='mt-3'>
             <img src={ZIMOCIVICA} className='h-auto w-auto' alt='' />
        </div>
        <div className='mt-4 leading-8'>
            <p className='text-[14px] font-lato'>CIVICA ARE THE OFFICIAL ADMINISTRATOR OF THE ZIMO PLATFORM.</p>
            <p className='text-[14px] font-lato'>CIVICA ADMINISTER A RANDOM DRAW OF ALL PURCHASED TICKET ENTRIES AND FREE TO ENTER POSTAL TICKET ENTRIES.</p>
            <p className='text-[14px] font-lato'>CIVICA PROVIDE A CERTIFIED REPORT (CERTIFICATE) CONFIRMING THE SUCCESSFUL TICKET ENTRY NUMBER OF THE PROPERTY.</p>
            <p className='text-[14px] font-lato'>CIVICA USE UNRIVALLED STATE OF THE ART SYSTEM(S) WITH THE LATEST TECHNOLOGY TO ADMINISTER A RANDOM DRAW.</p>
            <p className='text-[14px] font-lato'>CIVICA SHARE SECURE AND ENCRYPTED INFORMATION (TRANSFER).</p>
            <p className='text-[14px] font-lato'>CIVICA HAVE UNLIMITED/FULL ACCESS TO ALL PROPERTY LISTINGS. </p>
            <p className='text-[14px] font-lato'>CIVICA COLLECT ALL PURCHASED TICKET ENTRIES. </p>
            <p className='text-[14px] font-lato'>CIVICA COLLECT ALL FREE TO ENTER POSTAL ENTRIES.</p>
            <p className='text-[14px] font-lato'>CIVICA IDENTIFY AND SORT FREE TO ENTER POSTAL ENTRIES FOR ALL LISTINGS.</p>            
        </div>

        <div className='mt-7 leading-8'>
            <h1 className='text-[20px] font-lato text-[#008999]'>THE DRAW PROCESS</h1>
            <p className='text-[14px] mt-4 font-lato'>CIVICA COMBINE THE RELEVANT PURCHASED TICKET ENTRIES WITH THE FREE TO ENTER POSTAL ENTRIES.</p>
            <p className='text-[14px] font-lato'>CIVICA USE THE LATEST TECHNOLOGY TO ADMINISTER A RANDOM DRAW.</p>
            <p className='text-[14px] font-lato'>CIVICA ANNOUNCE THE SUCCESSFULL TICKET ENTRY NUMBER.</p>
            <p className='text-[14px] font-lato'>CIVICA PROVIDE A CERTIFIED REPORT (CERTIFICATE).</p>
            <p className='text-[14px] font-lato'>CIVICA SHARE DATA OF THE PROPERTY LISTING (ID).</p>
            <p className='text-[14px] font-lato'>CIVICA SHARE THE NUMBER OF PURCHASED TICKET ENTRIES.</p>
            <p className='text-[14px] font-lato'>CIVICA SHARE THE NUMBER OF FREE TO ENTER POSTAL TICKET ENTRIES.</p>
            <p className='text-[14px] font-lato'>CIVICA PROVIDE INFORMATION OF THE START AND END OF THE PROPERTY LISTING.</p>    
        </div>
    </div>

    <div className='h-auto w-96 mt-8 lg:mt-0'>
        <img src={image} alt='' />
    </div>
</div>
    </>
  )
}

export default WorldWideCom