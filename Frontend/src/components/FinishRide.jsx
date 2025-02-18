import React from "react";
import customer from '../assets/customer.jpg';
import { Link } from "react-router-dom";

const FinishRide = (props) => {
    return (
        <div className=" bg-white fixed bottom-0 left-0 right-0 shadow-lg p-3 rounded-t-lg">
            {/* Close Arrow */}
            <div className="flex justify-center">
                <i
                    className="text-2xl text-gray-600 ri-arrow-down-wide-line cursor-pointer"
                    onClick={() => props.setFinishRidePanel(false)}
                ></i>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center mt-2 mb-3">
                <img className="h-12 w-12 rounded-full object-cover" src={customer} alt="customer" />
                <h4 className="text-base font-medium mt-1">John Doe</h4>

            </div>

            {/* Ride Details */}
            <h3 className="text-lg font-semibold text-center mb-3">Finish this Ride</h3>

            <div className="space-y-2">
                {/* Pickup & Drop-off */}
                {[
                    { icon: "ri-map-pin-2-fill", title: "75-B", subtitle: "Wright Town, Jabalpur" },
                    { icon: "ri-map-pin-user-fill", title: "75-B", subtitle: "Wright Town, Jabalpur" },
                    { icon: "ri-currency-line", title: "₹189.20", subtitle: "Cash" }
                ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border border-gray-300 rounded-md">
                        <i className={`text-lg ${item.icon} text-gray-700`}></i>
                        <div>
                            <h3 className="text-sm font-medium">{item.title}</h3>
                            <p className="text-xs text-gray-600">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Button and Text */}
            <div className="flex flex-col items-center gap-4 mt-4">
                <Link
                    to="/captain-home"
                    className="w-11/12 bg-green-700 text-white text-base font-semibold rounded-lg py-3 text-center transition-all duration-300 ease-in-out hover:bg-green-800 hover:shadow-lg active:scale-95 mx-auto block"
                >
                    Finish Ride
                </Link>

                <p className="text-sm text-center text-gray-600 mt-2">
                    Click 'Finish Ride' once the payment is complete.
                </p>
            </div>

        </div >
    )

}

export default FinishRide;