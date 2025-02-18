import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";
import car from "../assets/car.png";
import logo from "../assets/logo.png";
import driver from "../assets/driver.jpg";
import CaptainDetails from '../components/CaptainDetails';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(() => {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, { y: 0, duration: 0.3 });
        } else {
            gsap.to(finishRidePanelRef.current, {
                y: "100vh",
                duration: 1.2,
                onComplete: () => setFinishRidePanel(null)
            });
        }
    }, [finishRidePanel]);


    return (
        <div className="h-screen ">
            <div className='fixed p-2 top-0 flex items-center justify-between w-screen '>
                <img className="w-35  -mt-12 self-start -mb-25" src={logo} alt="Logo" />
                <Link to='/captain-home'
                    className=" h-10 w-10  bg-white flex items-center justify-center rounded-full">
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-3/5"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "190%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
            </div>
            {/* Bottom Section */}
            <div className="h-2/5 p-6 flex flex-col items-center justify-between bg-gradient-to-b from-yellow-300 to-yellow-350 rounded-t-3xl shadow-lg">

                <h5 className='p-1 relative text-center w-[93%] absolute top-0' onClick={() => {

                }}><i className='text-3xl text-gray-500 ri-arrow-up-wide-line'></i></h5>

                {/* Ride Distance Info */}
                <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900"> 3 KM away</h4>
                    <p className="text-sm text-gray-800 mt-1">Stay on route for a smooth ride</p>
                </div>

                {/* Complete Ride Button */}
                <button className="w-10/12 bg-green-600 text-white font-semibold py-3 rounded-full text-lg shadow-md 
        hover:bg-green-700 transition-transform transform hover:scale-105">
                    Complete Ride
                </button>
            </div>


            <div ref={finishRidePanelRef} className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-10 pt-12">
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>


        </div >
    )

}

export default CaptainRiding;