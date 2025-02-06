import React from "react";
import logo from "../assets/logo.png";
import bgImage from "../assets/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
               <div
      className="h-screen  flex justify-between flex-col w-full bg-no-repeat "
      style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center 20%"  }}
    >
          <img className="w-35 ml-4 -mt-8" src={logo} alt="Logo"  />
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className="text-3xl font-bold">Get Started</h2>
                <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
            </div>
            </div>

        </div>
    )
}

export default Home; 