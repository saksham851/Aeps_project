import React from 'react';
import { Link } from 'react-router-dom';
import logo22new from '../assets/logo22new.png';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <img src={logo22new} alt="Logo" className="h-11 mr-2 rounded text-white"/>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="text-Black hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-Black hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-Black  hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-Black hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="mobile-menu-button focus:outline-none focus:text-white">
                            <svg
                                className="h-6 w-6 fill-current text-white"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm18 4H3a1 1 0 000 2h18a1 1 0 000-2zm0 6H3a1 1 0 000 2h18a1 1 0 000-2z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden mobile-menu hidden">
                <ul className="px-2 py-3">
                    <li>
                        <Link to="/" className="block text-gray-300 hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="block text-gray-300 hover:text-white">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block text-gray-300 hover:text-white">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block text-gray-300 hover:text-white">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

