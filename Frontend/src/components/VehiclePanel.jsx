import React, { useState, useRef } from 'react';
import 'remixicon/fonts/remixicon.css'
import car from '../assets/car.png';
import bike from '../assets/bike.png';
import auto from '../assets/auto.png';
const VehiclePanel = (props) => {
    const fare = props.fare || { car: '', moto: '', auto: '' }; // Default values to avoid null/undefined errors

    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0  '
                onClick={() => {
                    props.setVehiclePanelOpen(false);
                }}
            ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-xl font-semibold mb-5'>Choose your ride</h3>
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
                className="flex bg-gray-100 rounded-xl w-full p-3 items-center justify-between mb-2 active:border-2 active:border-black">
                <img className='h-20' src={car} alt='car' />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>OTWgo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-medium text-xs text-gray-600'>Pocket-friendly rides</p>
                </div>
                <h2 className=' text-xl font-semibold'> ₹{fare.car}</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
                className="flex bg-gray-100 rounded-xl w-full p-3 items-center justify-between mb-2 active:border-2 active:border-black">
                <img className='h-20' src={bike} alt='car' />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>10 mins away</h5>
                    <p className='font-medium text-xs text-gray-600'>Zip through traffic</p>
                </div>
                <h2 className=' text-xl font-semibold'>₹{fare.moto}</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
                className="flex bg-gray-100 rounded-xl w-full p-3 items-center justify-between mb-2 active:border-2 active:border-black">
                <img className='h-17' src={auto} alt='car' />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>OTWauto<span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>5 mins away</h5>
                    <p className='font-medium text-xs text-gray-600'>Hop in, ride cheap</p>
                </div>
                <h2 className=' text-xl font-semibold'>₹{fare.auto}</h2>
            </div>

        </div>
    )
}

export default VehiclePanel;