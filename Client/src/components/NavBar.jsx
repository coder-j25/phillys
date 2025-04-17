import { Link } from "react-router-dom";
import logo from "./../assets/logo.jpg"
import React from "react";


const NavBar = () => {
    return (
        <>
            <div className="bg-black text-white bold pb-5 pt-5">
                <div className="flex justify-evenly items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                   <img src={logo} className="w-[30%] md:w-[15%] lg:w-[10%] xl:w-[10%]"/>
                   <Link to="/">About Us</Link>
                   <Link to="/menu">Menu</Link>
                   <Link to="/findus">Find Us</Link>
                   <Link to="/contactus">Contact Us</Link>
                </div>
<div>
   
</div>
            </div>
        </>
    )
}

export default NavBar