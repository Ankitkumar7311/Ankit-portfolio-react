import React from "react";
import { FaTwitter, FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="fixed left-4 top-1/3 flex flex-col space-y-4 text-white">
      <a href="https://www.instagram.com/raja_yadav7311/?hl=en">
        <FaInstagram className="cursor-pointer hover:text-gray-400" size={20} /></a>
      <a href="https://github.com/Ankitkumar7311">   <FaGithub className="cursor-pointer hover:text-gray-400" size={20} /></a>

      <a href="https://www.facebook.com/profile.php?id=100070435802643">   <FaFacebook className="cursor-pointer hover:text-gray-400" size={20} /></a>



      <a href="https://www.linkedin.com/in/ankit-kumar-8665ab17b/">  <FaLinkedin className="cursor-pointer hover:text-gray-400" size={20} /></a>

      <p className="mt-20 text-sm rotate-[-90deg] origin-left">Follow Me ---</p>
    </div>
  );
};

export default Sidebar;
