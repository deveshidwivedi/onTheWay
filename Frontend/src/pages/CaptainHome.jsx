import React, { useState, useRef, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";
import car from "../assets/car.png";
import logo from "../assets/logo.png";
import driver from "../assets/driver.jpg";
import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainHome = () => {

    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const ridePopupPanelRef = useRef(null);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
    const confirmRidePopupPanelRef = useRef(null);

    const { socket } = useContext(SocketContext);
    const { captain } = useContext(CaptainDataContext);

    useEffect(() => {

        socket.emit('join', {
            userId: captain.id,
            userType: 'captain'
        });

        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    console.log(position.coords.latitude, position.coords.longitude);
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation();

    }, [captain]);

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

    useGSAP(() => {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, { y: 0, duration: 0.3 });
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                y: "100vh",
                duration: 1.2,
                onComplete: () => setConfirmRidePopupPanel(null)
            });
        }
    }, [confirmRidePopupPanel]);

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
                <RidePopup setRidePopupPanel={setRidePopupPanel}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                />
            </div>

            <div ref={confirmRidePopupPanelRef} className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-10 pt-12">
                <ConfirmRidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}

                />
            </div>
        </div >
    )
}

export default CaptainHome;