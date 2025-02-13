import React from "react";
import car from '../assets/car.png';

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0  '
                onClick={() => {
                    props.setVehiclePanelOpen(false);
                }}
            ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-xl font-semibold mb-5'>Confirm your ride</h3>

            <div className="flex gap-2 justify-between  flex-col items-center">
                <img src={car} alt='car' />
                <div className="w-full">
                    <div className="flex  items-center gap-5">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-mediumm">75-B</h3>
                            <p className="text-sm text-gray-600 -mt-1">Wright Town, Jabalpur</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>

                </div>
                <button className="w-full bg-green-700 text-white font-semibold rounded-xl">Confirm</button>
            </div>
        </div>
    );
}

export default ConfirmRide;