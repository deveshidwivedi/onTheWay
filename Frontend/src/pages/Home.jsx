import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import logo from "../assets/logo.png";
import bg22 from "../assets/bg22.jpg";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const vehiclePanelRef = useRef(null);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const confirmRidePanelRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [destinationSuggestions, setDestinationSuggestions] = useState([]);
    const [activeField, setActiveField] = useState(null);
    const [fare, setFare] = useState({ car: '', moto: '', auto: '' });

    const [vehicleType, setVehicleType] = useState(null);

    const { sendMessage, receiveMessage, socket } = useContext(SocketContext);

    const { user } = useContext(UserDataContext)

    useEffect(() => {
        console.log(user);
        if (socket) {
            socket.emit("join", { userType: "user", userId: user._id });
        } else {
            console.warn("Socket is not initialized yet");
        }
    }, [user, socket]);

    const handlePickupChange = async (e) => {
        setPickup(e.target.value);
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setPickupSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching pickup suggestions:', error);
        }
    };

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value);
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setDestinationSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching destination suggestions:', error);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description);
        } else if (activeField === 'destination') {
            setDestination(suggestion.description);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
            });
            gsap.to(panelCloseRef.current, {
                opacity: 1
            });
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
            });
            gsap.to(panelCloseRef.current, {
                opacity: 0
            });
        }
    }, [panelOpen]);

    useGSAP(function () {
        if (vehiclePanelOpen) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [vehiclePanelOpen]);

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [confirmRidePanel]);

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [vehicleFound]);

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [waitingForDriver]);

    async function findTrip() {
        setVehiclePanelOpen(true);
        setPanelOpen(false);
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        console.log(response.data);
        setFare(response.data);;

    }

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(response.data);
    }

    return (
        <div className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col items-center overflow-hidden"
            style={{ backgroundImage: `url(${bg22})` }}>
            <img className="w-35 ml-4 -mt-8 self-start" src={logo} alt="Logo" />

            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <div className='line absolute h-16 w-1 top-[55%] left-10 bg-gray-700 rounded-full transform -translate-y-1/2'></div>

                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false);
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
                                setActiveField('pickup');
                            }}
                            value={pickup}
                            onChange={handlePickupChange}
                            className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                            type="text"
                            placeholder="Add pick-up location"
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('destination');
                            }}
                            value={destination}
                            onChange={handleDestinationChange}
                            className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                            type="text"
                            placeholder="Enter your destination"
                        />
                    </form>
                    <button
                        onClick={findTrip}
                        className="bg-black  text-white font-semibold py-3 w-full rounded-lg shadow-md transition duration-300 mt-3">
                        Find Trip
                    </button>


                </div>
                <div ref={panelRef} className='bg-white'>
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        onSuggestionClick={handleSuggestionClick}
                    />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
                <VehiclePanel
                    selectVehicle={setVehicleType}
                    setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}
                    fare={fare}
                />
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
                <ConfirmRide
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
                <LookingForDriver
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setVehicleFound={setVehicleFound} />
            </div>
            <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-14'>
                <WaitForDriver waitingForDriver={waitingForDriver} />
            </div>
        </div>
    );
};

export default Home;
