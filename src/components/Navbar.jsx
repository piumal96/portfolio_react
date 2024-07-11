import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
 import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 mb-2'>
        <div className='flex items-center flex-shrink-0'>
            <img className='w-10 mx-2' src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar