import Link from 'next/link';
import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link href={"/"}>Home</Link>
                            <Link href={"all-apple"}>Apple</Link>
                            <Link href={"/"}>My Profile</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <FaAppleAlt />
                        Apple</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu gap-5 menu-horizontal px-1">
                       <Link href={"/"}>Home</Link>
                       <Link href={"all-apple"}>Apples</Link>
                       <Link href={"/"}>My Profile</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn"><Link href={"login"}>login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;