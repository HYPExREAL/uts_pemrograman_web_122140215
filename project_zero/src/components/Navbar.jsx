import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-secondary text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">HobiKu</h1>
                {/* Hamburger Menu untuk Mobile */}
                <button className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                {/* Menu Desktop */}
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition-all duration-300 ease-in-out ${
                                    isActive ? 'text-gray-300' : ''
                                }`
                            }
                            aria-current="page"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/items"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition-all duration-300 ease-in-out ${
                                    isActive ? 'text-gray-300' : ''
                                }`
                            }
                        >
                            Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition-all duration-300 ease-in-out ${
                                    isActive ? 'text-gray-300' : ''
                                }`
                            }
                        >
                            Your Space
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;