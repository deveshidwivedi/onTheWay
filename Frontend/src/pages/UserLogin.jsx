import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if (response.status === 200) {
            const data = await response.json();
            setUser(data);
            navigate('/home');
        } else {
            console.error("Login failed");
        }
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

                    <h3 className="text-lg font-medium mb-2"> We’ve got your ride covered! What's your email?</h3>
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
                        New here? <Link to="/signup" className="text-blue-600">Create New Account</Link>
                    </p>

                </form>
            </div>
            <div>
                <Link to='/captain-login' className="flex items-center justify-center bg-[#f3c267] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg">Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin