import React, { useState } from "react";
import customer from '../assets/customer.jpg';
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {

    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className=" bg-white fixed bottom-0 left-0 right-0 shadow-lg p-3 rounded-t-lg">
            {/* Close Arrow */}
            <div className="flex justify-center">
                <i
                    className="text-2xl text-gray-600 ri-arrow-down-wide-line cursor-pointer"
                    onClick={() => props.setConfirmRidePopupPanel(false)}
                ></i>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center mt-2 mb-3">
                <img className="h-12 w-12 rounded-full object-cover" src={customer} alt="customer" />
                <h4 className="text-base font-medium mt-1">John Doe</h4>
                <p className="text-xs text-gray-500">2.2 KM away</p>
            </div>

            {/* Ride Details */}
            <h3 className="text-lg font-semibold text-center mb-3">Confirm to Proceed</h3>

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


            <div className="flex gap-2 mt-3">
                <form onSubmit={(e) => submitHandler(e)} className="w-full">
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        placeholder="Enter OTP"
                        className="bg-[#eeeeee] px-4 py-2 text-base rounded-lg w-full mt-3"
                    />
                    <div className="flex gap-3 mt-3">
                        <Link
                            to="/captain-driving"
                            className="w-1/2 bg-green-700 text-white text-sm font-semibold rounded-md py-2 text-center hover:bg-green-800"
                        >
                            Confirm
                        </Link>
                        <button
                            type="button"
                            onClick={() => {
                                props.setConfirmRidePopupPanel(false);
                                props.setRidePopupPanel(false);
                            }}
                            className="w-1/2 bg-red-600 text-white text-sm font-semibold rounded-md py-2 text-center hover:bg-red-700"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

        </div >
    )
}

export default ConfirmRidePopup;