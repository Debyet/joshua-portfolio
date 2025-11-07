import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
   <footer className='bg-white/5 px-4 md:px-16 lg:px-28 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-lg font-bold mb-4 text-white'> About Me</h2>
                <p className='text-gray-300'>
                    I chose to study computer science because I want to learn more about computer science
                </p>
            </div>
            <div>
                <h2 className='text-lg font-bold mb-4 text-white'> Quick Links</h2>
                <ul>
                    <li><a href="#home" className='hover:underline text-gray-300'>Home</a></li>
                    <li><a href="#about" className='hover:underline text-gray-300'>About</a></li>
                    <li><a href="#projects" className='hover:underline text-gray-300'>Projects</a></li>
                    <li><a href="#contact" className='hover:underline text-gray-300'>Contact</a></li>
                </ul>
            </div>
            <div>
                 <h2 className='text-lg font-bold mb-4 text-white'>Social Media</h2>
                 <ul className='flex space-x-4'>
                    <li> <FaFacebookF className="text-blue-500"/><a href="https://www.facebook.com/" className='hover:underline text-gray-300'>Facebook</a></li>
                    <li> <FaTwitter className="text-sky-500"/><a href="https://www.linkedin.com/" className='hover:underline text-gray-300'>Twitter</a></li>
                    <li> <FaInstagram className="text-orange-500"/><a href="https://www.instagram.com/" className='hover:underline text-gray-300'>Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className='border-t border-gray-600 pt-6 text-gray-300 text-center mt-6'>
            <p> 2025 Anto Devieth Jushua | All rights reserved.</p>
        </div>
   </footer>
  );
};

