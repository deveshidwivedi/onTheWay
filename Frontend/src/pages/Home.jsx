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

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);

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

    return (
        <div className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col items-center  overflow-hidden"
            style={{ backgroundImage: `url(${bg22})` }}>
            <img className="w-35 ml-4 -mt-8 self-start" src={logo} alt="Logo" />

            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
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
                    <LocationSearchPanel />
                </div>
            </div>
            <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6'>
                <h3 className='text-xl font-semibold mb-5'>Choose your ride</h3>
                <div className="flex bg-gray-100 rounded-xl w-full p-3 items-center justify-between mb-2 active:border-2 active:border-black">
                    <img className='h-20' src={car} alt='car' />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>OTWgo <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Pocket-friendly rides</p>
                    </div>
                    <h2 className=' text-xl font-semibold'> ₹208.6</h2>
                </div>
                <div className="flex bg-gray-100 rounded-xl w-full p-3 items-center justify-between mb-2 active:border-2 active:border-black">
                    <img className='h-20' src={bike} alt='car' />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>10 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Zip through traffic</p>
                    </div>
                    <h2 className=' text-xl font-semibold'> ₹110.5</h2>
                </div>
                <div className="flex bg-gray-100 rounded-xl w-full p-3 items-center justify-between mb-2 active:border-2 active:border-black">
                    <img className='h-17' src={auto} alt='car' />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>OTWauto<span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>5 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Hop in, ride cheap</p>
                    </div>
                    <h2 className=' text-xl font-semibold'> ₹156.2</h2>
                </div>
                4 55
            </div>
        </div>
    );
};

export default Home;
