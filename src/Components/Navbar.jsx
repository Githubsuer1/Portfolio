import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { HiXMark } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = ()=>{
    setOpen((prev)=>!prev)
  }
  return (
  <nav className={` bg-[#ff5733] text-white w-full h-14 fixed top-0 flex justify-between items-center  sm:p-2 p-2.5 z-50`}>
    <div className={`font-bold text-lg sm:text-2xl`}>Siddhant Mishra</div>
    {/* visible only in small devices */}
    <div className={`sm:hidden ${open?"navbar h-screen absolute top-0 right-0 bg-gradient-to-t from-blue-400 to-pink-500 flex flex-row justify-between":""}`}>

        <div className={`sm:hidden p-3.5`} 
          onClick={handleClick}>
          {open ? <HiXMark size={24}/>:<HiMenu  size={24}/>}
        </div>

        {/* visible only in small devices */}
        <div className={`sm:hidden ${open?"flex flex-col gap-2 p-3":"hidden"}`}>
          <NavLink to='/about' className="navlink text-md text-white ">About</NavLink>
          <NavLink to="/skills" className="navlink text-md text-white ">Skills</NavLink>
          <NavLink to="/education" className="navlink text-md text-white ">Education</NavLink>
          <NavLink to="/projects" className="navlink text-md text-white ">Projects</NavLink>
          <NavLink to="/contact" className="navlink text-md text-white ">Contact</NavLink>
        </div>
    </div>


    <div className='hidden w-2/4 sm:flex sm:flex-row sm:justify-around'>
      <NavLink to='/about' className="navlink text-lg ">About</NavLink>
      <NavLink to="/skills" className="navlink text-lg ">Skills</NavLink>
      <NavLink to="/education" className="navlink text-lg ">Education</NavLink>
      <NavLink to="/projects" className="navlink text-lg ">Projects</NavLink>
      <NavLink to="/contact" className="navlink text-lg ">Contact</NavLink>
    </div>

</nav>)
};

export default Navbar;
