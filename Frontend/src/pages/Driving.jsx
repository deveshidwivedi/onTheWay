import React from "react";
import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";
import car from "../assets/car.png";
const Driving = () => {
    return (
        <div className="h-screen">
            <Link to='/home'
                className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full">
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className="h-1/2"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "160%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
            </div>

            <div className="h-1/2">
                <div className="flex items-center justify-between mr-4">

                    <img
                        className="h-23"
                        src={car} alt="car" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium">Mr. Sanjay</h2>
                        <h4 className="text-xl font-semibold">MH 09 JK 9090</h4>
                        <p className="text-sm text-gray-600">Hyundai Xcent</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-between  flex-col items-center">

                    <div className="w-full">

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
                <button className="w-full bg-green-700 text-white font-semibold rounded-md">
                    Pay Now
                </button>
            </div>
        </div >
    )
}

export default Driving;
