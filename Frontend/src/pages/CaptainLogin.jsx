import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

        if (response.status === 200) {
            const data = response.data

            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')

        }
        //reset fields
        setEmail('');
        setPassword('');
    }

    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img className="w-25 -ml-2 -mt-8 -mb-4" src={logo} alt="Logo" />

                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>

                    <h3 className="text-lg font-medium mb-2"> Ready to hit the road? Let’s start with your email!</h3>
                    <input required value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email" placeholder="email@example.com" />

                    <h3 className="text-lg font-medium mb-2">Please enter your password</h3>
                    <input required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password" placeholder="password" />

                    <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg">Login</button>

                    <p className="text-center">
                        New here? <Link to='/captain-signup' className="text-blue-600">Join the fleet</Link>
                    </p>

                </form>
            </div>
            <div>
                <Link to='/login' className="flex items-center justify-center bg-[#10b461] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg">Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin;