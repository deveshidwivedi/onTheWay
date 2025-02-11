import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        })
        //reset 
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');

    }


    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img className="w-25 -ml-2 -mt-8 -mb-4" src={logo} alt="Logo" />

                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>

                    <h3 className="text-lg font-medium mb-2"> Your good name?</h3>
                    <div className="flex gap-2">
                        <input required
                            className="bg-[#eeeeee] w-1/2 mb-2 rounded px-4 py-2 border  text-lg placeholder:text-base"
                            type="text" placeholder="First name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <input required
                            className="bg-[#eeeeee] w-1/2 mb-2 rounded px-4 py-2 border   text-lg placeholder:text-base"
                            type="text" placeholder="Last name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2"> Your email address, please.</h3>
                    <input required
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email" placeholder="email@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <h3 className="text-lg font-medium mb-2">Enter a secure password.</h3>
                    <input required
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password" placeholder="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />

                    <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg">Signup</button>

                    <p className="text-center">
                        Already have an account? <Link to="/login" className="text-blue-600">Login here</Link>
                    </p>

                </form>
            </div>
            <div>
                <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from onTheWay to the number you provided.</p>
            </div>
        </div>
    )
}

export default UserSignup;