import React from "react";
import { FaArrowRight } from "react-icons/fa";


const Navbar = () => {


    const navItems = (
        <>
        <li>
            <a>Home</a>
        </li>

        <li>
            <a>About Us</a>
        </li>

        <li>
            <a>Featured</a>
        </li>

        <li>
            <a>Contact Us</a>
        </li>


        </>
    )

	return (
		<div className=" border-4 navbar text-black sm:text-white  bg-custom-gradient-rtl border-b-[1px] border-gray-500 
		max-w-screen-2xl container mx-auto px-4 sm:px-10 md:px-20">
			
            
            <div className="navbar-start">


				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost bg-gray-500 hover:bg-gray-600 lg:hidden ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>


					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>

                     {navItems}

					</ul>



				</div>
				<a className="btn btn-ghost text-xl text-white border-2 border-gray-500">ChipCoins</a>

			</div>


			<div className="navbar-center  hidden lg:flex">


				<ul className="menu menu-horizontal px-1 ">

                {navItems}

				</ul>


			</div>


			<div className="navbar-end">
				<a className="btn bg-blue-400 text-white">
                    Contact Us
                    <span><FaArrowRight />
                    </span>

                </a>
			</div>


		</div>
	);
};

export default Navbar;
