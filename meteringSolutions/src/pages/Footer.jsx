import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer
            className="bg-white border-t-2 border-cyan-500 text-cyan-600 lg:px-7 sm:px-1 transition-all duration-500 ease-in-out fixed inset-x-0 bottom-0 p-2"  // Hover effect
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
                {/* Small Footer Content */}
                <div className="flex justify-between items-center h-full px-4">
                    <p className="text-sm">© {new Date().getFullYear()} SmartLynk</p>
                    <div className="flex space-x-4">
                        <FaFacebookF className="text-cyan-600 hover:text-cyan-500" />
                        <FaTwitter className="text-cyan-600 hover:text-cyan-500" />
                        <FaLinkedinIn className="text-cyan-600 hover:text-cyan-500" />
                        <FaInstagram className="text-cyan-600 hover:text-cyan-500" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
