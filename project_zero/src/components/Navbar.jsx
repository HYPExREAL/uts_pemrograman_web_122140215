import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-secondary text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-raleway text-2xl font-bold">MediaTrackr</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="font-poppins hover:text-black">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/items" className="font-poppins hover:text-black">
                            Items
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="font-poppins hover:text-black">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;