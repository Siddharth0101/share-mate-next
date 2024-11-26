"use client"
import { useState } from "react";
export default function RegisterModal({setToast,setMessage}) {
    const [isUserName,setIsUserName]=useState("")
    const [isEmail,setIsEmail]=useState("")
    const [isPassword,setIsPassword]=useState("")
    const [isConfirmPassword,setIsConfirmPassword]=useState("")
    const userNameHandler=(e)=>{
        let value=e.target.value
        let upperCaseUserName=value.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
        setIsUserName(upperCaseUserName)
    }
    const emailHandler=(e)=>{
        let value=e.target.value.toLowerCase()
        setIsEmail(value)
    }
    const passwordHandler=(e)=>{
        let value=e.target.value
        setIsPassword(value)
    }
    const confirmPasswordHandler=(e)=>{
        let value=e.target.value
        setIsConfirmPassword(value)
    }
    const registerHandler=(e)=>{
        e.preventDefault()
        if(isPassword!=isConfirmPassword) {
            setToast(true)
            setMessage("password do not match")
            return 
        }
        if(isPassword.length<=6) {
            setToast(true)
            setMessage("Password must be longer than 6 characters")
            return 
        }
        setToast(true);
        setMessage("Registration successful!");
    }
    return <div className="flex justify-center">
        <div className="lg:max-w-xl h-auto md:max-w-md  p-5 m-5  bg-white rounded-2xl  shadow-2xl ">
            <form onSubmit={registerHandler}>
                <div className="flex justify-center text-2xl text-black font-bold ">
                    Register
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        User Name
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full text-xl" onChange={userNameHandler} value={isUserName} required/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Email
                    </div>
                    <div className="m-2">
                        <input type="email" className="bg-slate-400 rounded-md w-full text-xl" onChange={emailHandler} value={isEmail} required/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Password
                    </div>
                    <div className="m-2">
                        <input type="password" className="bg-slate-400 rounded-md w-full text-xl" onChange={passwordHandler} value={isPassword} required/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl">
                        Confirm Password
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-400 rounded-md w-full text-xl" onChange={confirmPasswordHandler} value={isConfirmPassword} required/>
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="outline bg-gray-600 hover:bg-green-800 m-1 w-[50vw] rounded-3xl text-white text-2xl p-1">Register</button>
                </div>
            </form>
        </div>
    </div>
}