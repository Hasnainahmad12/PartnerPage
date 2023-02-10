import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ZIMOMenu1 from "../assets/Logos/ZIMOMenu1.png";
import ZIMOB from "../assets/Logos/ZIMOB.png";
import ZIMOZIG from "../assets/Logos/ZIMOZIG.png";
import flag from "../assets/Logos/flag.png";
import icons from "../assets/Logos/icon1.png";
import ZIMOUser1 from "../assets/Logos/ZIMOUser1.png";


const Navbar = () => {
 
  const [icon, seticon] = useState(false);
 
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;

      // Check if the user has scrolled down
      if (currentScrollPos === 0) {
        setPrevScrollpos(0);
      } else if (prevScrollpos > currentScrollPos) {
        setPrevScrollpos(0);
      } else {
        setPrevScrollpos(-100);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);


  return (
    // Main Container
    <div id="navbar" style={{ position: 'fixed', width: '100%', top: prevScrollpos }}>
      {/* Below Child Container */}
      <div className="flex gap-5 left">
        <img src={ZIMOMenu1} className='fill-black lg:h-10 w-auto h-7' alt="" />
        <img src={ZIMOB} className='lg:h-10 w-auto h-7' alt="" />
        <h2 className="about__name text-black cursor-pointer">OUR PARTNERSHIP</h2>
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
      <div>
         <img src={ZIMOZIG} className='h-10 w-auto' alt="" />
      </div>

      <div className="flex items-center justify-evenly  w-96 flag">
          <div className="text-xs uppercase flex flex-col items-end">
            <p className="text-black font-lato">17:23 &nbsp;&nbsp; London &nbsp;&nbsp; United kingdom</p>
            <p className="text-[#BE9F56] font-lato">sunday, &nbsp; 12 &nbsp; february 2023</p>
          </div>

          <div className="h-4 w-7 -mt-1">
              <img src={flag} className='' alt="" />            
          </div>
      </div>

      <div className="flex gap-16 mt-2 mr-6">
      <p className="text-2xl text-white">
            <img src={icons} className='h-5 w-auto' alt="" />
          </p>
          <p className="text-xl text-white">
            <img src={ZIMOUser1} className='lg:h-5 md:h-5 h-4 w-auto' alt="" />
          </p>
      </div>
      </ul>

     

    </div>
  );
};

export default Navbar;
