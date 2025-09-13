import React, { useState, useEffect } from "react";
import { List } from "lucide-react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import SpinningCircle from "./components/SpinningCircle"; // ✅ Import

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowIntro(false);
              setLoading(false);
              setProgress(0);
            }, 500);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  if (showIntro) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        {!loading ? (
          <>
            <h1 className="text-4xl font-bold mb-6">See My Portfolio</h1>
            <button
              onClick={handleClick}
              className="px-6 py-2 border border-white hover:bg-white hover:text-black transition"
            >
              Enter
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold">{progress}%</p>
            <div className="w-64 h-3 bg-gray-700 rounded mt-4">
              <div
                className="h-3 bg-white rounded transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2"><div className="loader"></div></p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div id="home">
        <Hero />
      </div>
      <Sidebar />
      <div id="menu">
        <Lists />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <SpinningCircle /> 
    </div>
  );
};

export default App;
