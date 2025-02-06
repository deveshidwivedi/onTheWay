import React from "react";
import logo from "../assets/logo.png";
const UserLogin = () => {
    return (
        <div className="p-7">
         <div>
         <img className="w-25 -ml-2 -mt-8 -mb-4" src={logo} alt="Logo"  />
           <form>
            <h3 className="text-lg font-medium mb-2"> We’ve got your ride covered! What's your email?</h3>
            <input required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email" placeholder="email@example.com" />

            <h3 className="text-lg font-medium mb-2">Please enter your password</h3>
            <input required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password" placeholder="password" />

           <button  className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg">Login</button>
            </form>
         </div>
         <div>
            <button>Create Account</button>
         </div>
        </div>
    )
}

export default UserLogin