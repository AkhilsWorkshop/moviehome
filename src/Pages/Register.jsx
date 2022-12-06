import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImg from "../assets/login/bg.jpg"
import { UserAuth } from '../context/AuthContext'

const Register = () => {

    const { signUpUser } = UserAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUpUser(email, password)
            console.log("Account created successfully")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (

        <div className="h-[calc(100vh_-_9rem)] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }} >

            <div className="flex items-center justify-center h-full w-full backdrop-blur-[2px] backdrop-brightness-[50%]">

                <div className="flex flex-col gap-7 w-full lg:w-1/4 bg-[#121216] border border-slate-800 shadow-md rounded-lg p-10 text-white">
                    <p className="font-bold text-2xl">Sign Up</p>

                    <form className="flex flex-col gap-7 text-white" onSubmit={handleSubmit}>
                        <input type="email" id="email" className="bg-slate-700 rounded-md block w-full p-2.5 py-3 focus:outline-none" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />

                        <input type="password" id="password" className="bg-slate-700 rounded-md block w-full p-2.5 py-3 focus:outline-none" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                        <button type="submit" className="text-black font-bold bg-[#EAB308]/80 hover:bg-[#EAB308] rounded-md px-5 py-2.5 text-center duration-300">Register</button>
                    </form>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="font-bold text-md text-gray-500">Already have an account?</p>
                        <Link to="/login" className="text-sm underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
