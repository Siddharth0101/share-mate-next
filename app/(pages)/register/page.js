"use client"
import RegisterModal from "@/components/authentication/registerModal";
import RegisterModalComp from "@/components/authentication/registerModalComp";
import Toast from "@/components/authentication/toast";
import { useState } from "react";
export default function Register() {
    const [isToast,setIsToast]=useState(false)
    const [isMessage,setIsMessage]=useState("")
    return (
        <div className="bg-black w-[100vw] h-[82.3vh]">
            <div>
                    <RegisterModal setToast={setIsToast} setMessage={setIsMessage}/>
                    {isToast && <Toast message={isMessage} setToast={setIsToast}/>}
            </div>
        </div>
    );
}
