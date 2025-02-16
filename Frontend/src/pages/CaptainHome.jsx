import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";
import car from "../assets/car.png";
import logo from "../assets/logo.png";
import driver from "../assets/driver.jpg";
import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {

    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const ridePopupPanelRef = useRef(null);

    useGSAP(() => {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, { y: 0, duration: 0.3 });
        } else {
            gsap.to(ridePopupPanelRef.current, {
                y: "100vh",
                duration: 1.2,
                onComplete: () => setRidePopupPanel(null)
            });
        }
    }, [ridePopupPanel]);

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

            <div className="h-2/5 p-4">
                <CaptainDetails />
            </div>

            <div ref={ridePopupPanelRef} className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-10 pt-12">
                <RidePopup setRidePopupPanel={setRidePopupPanel} />
            </div>
        </div >
    )
}

export default CaptainHome;