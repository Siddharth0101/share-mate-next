"use client";
import { useState } from "react";
import HeaderComp from "./headerComp";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
   return <div>
    <HeaderComp isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen}/>
   </div> 
}
