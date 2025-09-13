import React from "react";

const Lists = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col justify-between p-8">
      <div className="m-auto">
        <ul className="flex flex-col gap-8 text-7xl font-[montserrat] font">
          <li
            className="hover:text-red-500 duration-1000 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="hover:text-red-500 duration-1000 cursor-pointer"
            onClick={() => handleScroll("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="hover:text-red-500 duration-1000 cursor-pointer"
            onClick={() => handleScroll("about")}
          >
            About
          </li>
          <li
            className="hover:text-red-500 duration-1000 cursor-pointer"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100070435802643">Facebook</a>
          <a href="https://github.com/Ankitkumar7311">Github</a>
          <a href="https://www.linkedin.com/in/ankit-kumar-8665ab17b/">Linkedin</a>
        </div>
        <div>copyright __ ANKIT</div>
      </div>
    </div>
  );
};

export default Lists;
