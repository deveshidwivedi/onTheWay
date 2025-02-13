import React, { useState, useRef } from 'react';
import logo from "../assets/logo.png";
import bg22 from "../assets/bg22.jpg";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import gsap from "gsap";
import LocationSearchPanel from '../components/LocationSearchPanel';
import car from '../assets/car.png';
import bike from '../assets/bike.png';
import auto from '../assets/auto.png';
import VehiclePanel from '../components/VehiclePanel';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const vehiclePanelRef = useRef(null);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
    }


    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanelOpen) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanelOpen])

    return (
        <div className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col items-center  overflow-hidden"
            style={{ backgroundImage: `url(${bg22})` }}>
            <img className="w-35 ml-4 -mt-8 self-start" src={logo} alt="Logo" />

            <div
                className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <div className='line absolute h-16 w-1 top-[55%] left-10 bg-gray-700 rounded-full transform -translate-y-1/2'></div>

                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a Trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }}>

                        <input
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                            type="text"
                            placeholder="Add pick-up location"
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                            type="text"
                            placeholder="Enter your destination"
                        />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white '>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
                <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} />
            </div>
        </div>
    );
};

export default Home;
