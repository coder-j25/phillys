
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white bold pt-10 pb-10">
                <div className="pr-5 flex justify-end items-center space-x-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <Link to="/menu">Menu</Link>
                    <Link to="/findus">Find Us</Link>
                </div>
                <hr class="border-t-2 border-white-300 my-4" />
                <div className="flex justify-between items-center w-full px-4 py-2 text-white">
                    <div>
                        <p><span>©2025 Willy's Philly's. All rights reserved.</span></p>
                    </div>
                    <div className="flex space-x-4 pr-1">
                        <a href="https://www.facebook.com/profile.php?id=100090498100303">
                            <img
                                src={new URL('./../assets/fb-icon.png', import.meta.url).href}
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="https://www.instagram.com/willysphillystucson/">
                            <img
                                src={new URL('./../assets/ig-icon.png', import.meta.url).href}
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer