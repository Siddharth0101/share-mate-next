"use client"
import { useState } from "react";
import FormComp from "./formComp";

export default function Form({setIsList}) {
    const [isEnterCategory,setIsEnterCategory]=useState("")
    const [isEnterAmount,setIsEnterAmount]=useState("")
    const [isDescription,setIsDescription]=useState("")
    return <div>
        <FormComp isEnterCategory={isEnterCategory}  
        setIsEnterCategory ={setIsEnterCategory}setIsEnterAmount={setIsEnterAmount}
        isEnterAmount={isEnterAmount}  isDescription={isDescription} setIsDescription={setIsDescription} setIsList={setIsList}/>
    </div>
}