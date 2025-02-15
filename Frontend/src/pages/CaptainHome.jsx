import React from 'react';
import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";
import car from "../assets/car.png";
import logo from "../assets/logo.png";
import driver from "../assets/driver.jpg";

const CaptainHome = () => {
    return (
        <div className="h-screen ">
            <div className='fixed p-2 top-0 flex items-center justify-between w-screen '>
                <img className="w-35  -mt-12 self-start -mb-25" src={logo} alt="Logo" />
                <Link to='/home'
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
                <div className='flex p-3 bg-gray-100 rounded-full items-center justify-between '>
                    <div className='flex items-center justify-start gap-3 '>
                        <img className='h-16 w-16  rounded-full object-cover' src={driver} alt='driver' />
                        <h4 className='text-lg font-medium'>Sanjay Patil</h4>
                    </div>
                    <div className='mr-2'>
                        <h4 className='text-xl  font-semibold  '>
                            ₹189.20
                        </h4>
                        <p className='text-sm  text-gray-400 text-center'>
                            Earned
                        </p>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-start'>
                    <div className='text-center'>
                        <i className='text-2xl font-thin ri-timer-2-line'></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className='text-2xl font-thin ri-speed-up-line'></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className='text-2xl font-thin ri-booklet-line'></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default CaptainHome;