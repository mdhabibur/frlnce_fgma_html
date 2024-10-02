import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white p-10">

    <div className=' my_container flex flex-col sm:flex-row justify-between items-center'>

    <nav className=' flex flex-col gap-1'>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Shop</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
    </nav>



    <form className='flex flex-col gap-3'>
        <h6 className="footer-title  text-white ">Newsletter</h6>

        <fieldset className="flex items-start justify-start w-80 ">

        <div className="join">
            <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
        </div>

        </fieldset>

        <div className='flex flex-col sm:flex-row gap-3 items-start justify-start'>
        <AiFillTwitterCircle className='w-6 h-6' />
        <FaFacebook className='w-6 h-6'/>
        <FaInstagram className='w-6 h-6'/>
        <FaYoutube className='w-6 h-6'/>





        </div>

    </form>

    </div>



    </footer>
  )
}

export default Footer