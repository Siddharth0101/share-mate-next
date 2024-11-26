"use client"
import { useState } from "react";
import RegisterModalComp from "./registerModalComp";
export default function RegisterModal({setToast,setMessage}) {
    const [isUserName,setIsUserName]=useState("")
    const [isEmail,setIsEmail]=useState("")
    const [isPassword,setIsPassword]=useState("")
    const [isConfirmPassword,setIsConfirmPassword]=useState("")
    return <div>
        <RegisterModalComp isUserName={isUserName} setIsUserName={setIsUserName} isEmail={isEmail} setIsEmail={setIsEmail} isPassword={isPassword} setIsPassword={setIsPassword} isConfirmPassword={isConfirmPassword} setIsConfirmPassword={setIsConfirmPassword} setToast={setToast} setMessage={setMessage}/>
    </div>
}