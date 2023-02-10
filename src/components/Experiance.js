import React from 'react'
import experiance from "../assets/Images/experiance.png"
import expi from "../assets/Videos/ZIMO+CIVICA 101128.mp4"

const Experiance = () => {
  return (
    <div className='h-auto w-auto'>
        <video src={expi} className='h-screen w-full object-fill' autoPlay loop muted/>
    </div>
  )
}

export default Experiance