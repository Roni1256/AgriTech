import React from "react";
import { useState } from "react";
import { Nav } from "./components/Nav";
import bg from "../public/farm.jpeg";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SoilInfo from './components/SoilInfo'
import Scanning from "./components/Scanning";
import LeafDiseaseDetection from "./components/LeafDisease";

/**
 * The main App component that renders the application's UI.
 * It includes the navigation bar, a hero section with a background image, and a footer with links.
 * The component uses React Router to handle navigation between different pages of the application.
 */
const App = () => {
  const navigate = useNavigate();
  const [soilInfo,setSoilInfo]=useState(false);
  const [plantScanner,setPlantScanner]=useState(false);
  const [market,setMarket]=useState(false);

  const btnStyle =
    "p-10 bg-green   w-[300px] rounded-lg text-2xl shadow-md shadow-black/70 ";
  return (
    <>
      <div className={soilInfo || plantScanner?`h-full w-full bg-green-200`:'h-screen w-full bg-green-200'}>
        {/* Navigations */}
        <Nav />
        {/* Hero section */}
        <div
          className="h-full bg-cover backdrop-blur-sm "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="w-full h-full bg-green-800/20 backdrop-blur-sm p-10 text-center flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl text-yellow-100  font-bold mt-5 ">
              AGRI TECH
            </h1>
            <blockquote className="text-xl text-yellow-100 font-semibold tracking-wide">
              “Technology in agriculture is not just a tool but a necessary ingredient in feeding the world.
            </blockquote>
            <div className="flex gap-10 items-center">
              <button onClick={()=>{setSoilInfo(!soilInfo);setPlantScanner(false)}} className="bg-teal-950 text-white rounded-xl p-5 w-fit shadow-md shadow-black/50 flex gap-5 items-center"> Soil Analysis </button>
            
              <button onClick={()=>{setPlantScanner(!plantScanner);setSoilInfo(false)}} className="bg-teal-950 text-white rounded-xl p-5 w-fit shadow-md shadow-black/50 flex gap-5 items-center"> Scan Plant </button>
            </div>
   

            {
              soilInfo?<SoilInfo/>:plantScanner?<Scanning cam={true}/>:null
            }

          </div>
        </div>
        {/* <ObjDetect/> */}
        
        {/* footer */}

        <footer className=" w-full  bg-teal-950">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-md text-white sm:text-center ">
              AGRI TECH - 2024
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-white  sm:mt-0">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6"
                  onClick={() => navigate("/plantinfo")}
                >
                  Plants Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6"
                  onClick={() => navigate("/news")}
                >
                  News and Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6"
                  onClick={() => navigate("/market")}
                >
                  Market Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => navigate("/about")}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
