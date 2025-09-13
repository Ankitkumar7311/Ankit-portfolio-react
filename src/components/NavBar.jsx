import React, { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Lists from "./Lists";

const NavBar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 text-white bg-black">
        <h1 className="text-2xl font-bold">ANKIT</h1>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

    
      {isMenuOpen && <Lists />}
    </>
  );
};

export default NavBar;
