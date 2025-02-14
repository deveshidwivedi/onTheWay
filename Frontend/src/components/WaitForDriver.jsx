import React from "react";
import car from '../assets/car.png';

const WaitForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0  '
                onClick={() => {
                    props.waitingForDriver(false);
                }}
            ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
            <div className="flex items-center justify-between">
                <img
                    className="h-23"
                    src={car} alt="icar" />
                <div className="text-right">
                    <h2 className="text-lg font-medium">Mr. Sanjay</h2>
                    <h4 className="text-xl font-semibold">MH 09 JK 9090</h4>
                    <p className="text-sm text-gray-600">Hyundai Xcent</p>
                </div>
            </div>

            <div className="flex gap-2 justify-between  flex-col items-center">

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

export default WaitForDriver;