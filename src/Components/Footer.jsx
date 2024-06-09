
import logo22new from '../assets/logo22new.png'; // Import the logo image
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              <a href="/" className="block">
                <img src={logo22new} alt="Company Logo" className="h-12" />
              </a>
            </div>
            <ul>
              <li className="mb-2">
                <p><strong>Address:</strong> Ghansadih, near Thana More, Dhanbad, Jharkhand 828116</p>
              </li>
              <li className="mb-2">
                <p><strong>Phone:</strong> <a href="tel:+919097379339" className="text-blue-400">+91 9097379339</a></p>
              </li>
              <li className="mb-2">
                <p><strong>Email:</strong> <a href="mailto:onlinespey@gmail.com" className="text-blue-400">onlinespey@gmail.com</a></p>
              </li>
            </ul>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us:</h3>
              <ul className="flex space-x-4">
                <li><a href="https://www.facebook.com/onlinespey" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-lg"></i></a></li>
                <li><a href="https://twitter.com/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg"></i></a></li>
                <li><a href="https://www.instagram.com/onlinesolutionhub_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a></li>
                <li><a href="https://www.linkedin.com/company/onlinesolutionhub" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a></li>
                <li><a href="https://www.youtube.com/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-lg"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Product & Services</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Adhar Enabled Payment Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Account Opening</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Domestic Money Transfer</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Travel and Booking Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Insurances & Loans / Pan Card</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Micro ATM / POS Machine</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Recharge & BBPS & Utility Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">White Label ATM</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="about-us.html" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="about-us.html" className="hover:underline">Our Team</a></li>
              <li className="mb-2"><a href="contact-us.php" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Channel Partner</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">White Label & API Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Service Plans & Costing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Registration Process</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Sign Up</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-wrap justify-between items-center">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Cancellation/Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Customer Support</a></li>
          </ul>
          <p className="mt-4 md:mt-0">© 2024 All Rights Reserved by <a href="https://www.hubofsolution.online" target="_blank" rel="noopener noreferrer" className="text-blue-400">OnlineSolutionHub Software Pvt. Ltd.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
