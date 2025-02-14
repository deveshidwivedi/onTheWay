import React from "react";
import car from '../assets/car.png';

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0  '
                onClick={() => {
                    props.setVehicleFound(false);
                }}
            ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-xl font-semibold mb-5'>Looking for a Driver</h3>

            <div className="flex gap-2 justify-between  flex-col items-center">
                <img src={car} alt='car' />
                <div className="w-full">
                    <div className="flex items-center gap-5 p-3 border-b border-gray-300 rounded-md">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>

                            <h3 className="text-lg font-medium">75-B</h3>
                            <p className="text-sm text-gray-600 -mt-1">Wright Town, Jabalpur</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b border-gray-300 rounded-md">
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-mediumm">75-B</h3>
                            <p className="text-sm text-gray-600 -mt-1">Wright Town, Jabalpur</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-gray-300 rounded-md">

                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-lg font-mediumm">₹189.20</h3>
                            <p className="text-sm text-gray-600 -mt-1">Cash</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LookingForDriver;