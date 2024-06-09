import React from 'react';
import logo22new from '../assets/logo22new.png'; // Import the logo image

const Footer = () => {
    return (
        <footer className="footer-area bg-blue-500">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <div className="single-footer-widget">
                            <div className="contact-info-box">
                                <div className="footer-logo">
                                    <a href='/'>
                                        <img src={logo22new} alt="Company Logo" className="w-20 h-auto" />
                                    </a>
                                </div>
                                <ul className="text-white">
                                    <li>
                                        <p><b>Address : </b>Ghansadih, near Thana More Dhanbad Jharkhand 828116</p>
                                    </li>
                                    <li>
                                        <p><b>Phone :</b><a href="tel:+919097379339" className="text-white">+919097379339</a></p>
                                    </li>
                                    <li>
                                        <p><b>Email :</b><a href="mailto:onlinespey@gmail.com" className="text-white">onlinespey@gmail.com</a></p>
                                    </li>
                                </ul>
                                {/* Social links */}
                            </div>
                        </div>
                    </div>

                    {/* Other columns */}

                    <div className="col-span-1">
                        <div className="single-footer-widget">
                            <div className="title">
                                <h3>Product &amp; Services</h3>
                            </div>
                            <div className="services-links">
                                <ul>
                                    {/* Service links */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="single-footer-widget">
                            <div className="title">
                                <h3>Company</h3>
                            </div>
                            <div className="services-links">
                                <ul>
                                    {/* Company links */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="single-footer-widget">
                            <div className="title">
                                <h3>Channel Partner</h3>
                            </div>
                            <div className="services-links">
                                <ul>
                                    {/* Channel partner links */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="footer-bottom flex justify-between items-center py-8">
                            <p className="text-white">&copy; 2024 All Rights Reserved by <a href="https://www.hubofsolution.online" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100">OnlineSolutionHub Software Pvt. Ltd.</a></p>
                            <p className="text-white">We Are Coming Soon..</p>
                            <div className="footer-img">
                                <a href="#"><img src={logo22new} alt="Company Logo" className="w-20 h-auto" /></a>
                                {/* Add any other relevant image here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;



