import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {NavLink} from 'react-router-dom';


const Contact = () => {
    return (
      <section className="w-full bg-white min-h-screen h-full p-4 flex justify-center">
        <div className="flex sm:flex-row flex-col sm:gap-6 gap-8 p-8">

          <div className="flex gap-4">
            <NavLink className="p-3 shadow-2xl rounded-full w-24 h-24 flex items-center justify-center
            transition-all duration-700 ease hover:scale-110 transform hover:-translate-y-4 hover:bg-pink-500 hover:text-white">
              <FaSquareInstagram size={48}/>
            </NavLink >
            <NavLink className="p-3 shadow-2xl rounded-full w-24 h-24 flex items-center justify-center
            transition-all duration-700 ease hover:scale-110 transform hover:-translate-y-4 hover:bg-blue-500 hover:text-white">
              <FaFacebookSquare size={48}/>
            </NavLink>
          </div>

          <div className="flex gap-4">
            <NavLink className="p-3 shadow-2xl rounded-full w-24 h-24 flex items-center justify-center
            transition-all duration-700 ease hover:scale-110 transform hover:-translate-y-4 hover:bg-black hover:text-white">
              <FaSquareXTwitter size={48}/>
            </NavLink>
            <NavLink className="p-3 shadow-2xl rounded-full w-24 h-24 flex items-center justify-center
            transition-all duration-700 ease hover:scale-110 transform hover:-translate-y-4 hover:bg-blue-700 hover:text-white">
              <FaLinkedin size={48}/>
            </NavLink>
          </div>

          <div className="flex gap-4">
            <NavLink className="p-3 shadow-2xl rounded-full w-24 h-24 flex items-center justify-center
            transition-all duration-700 ease hover:scale-110 transform hover:-translate-y-4 hover:text-white hover:bg-black">
              <FaGithubSquare size={48}/>
            </NavLink>
            <NavLink className="p-3 shadow-2xl rounded-full w-24 h-24 flex items-center justify-center
            transition-all duration-700 ease hover:scale-110 transform hover:-translate-y-4 hover:bg-red-600 hover:text-white">
              <MdEmail size={48}/>
            </NavLink>
          </div>
          

          

          


        </div>
      </section>
    );
  };
  
  export default Contact;
  