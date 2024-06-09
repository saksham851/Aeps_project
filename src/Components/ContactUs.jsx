import React from 'react'
import Footer from './Footer'

const Contactus = () => {
  return (
   <>
            {/* Contact Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div >
                            <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
                            <p className="mb-6 ">Please fill out the contact form provided. One of our representatives will contact you within the next 24 hours.</p>
                            <ul className="text-sm mb-6">
                                <li className="flex items-center mb-2">
                                    <span className="mr-2"><i className="fas fa-map-marker-alt"></i></span>
                                    Gansadih Near Thana More Dhanbad city Jharkhand
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="mr-2"><i className="fas fa-phone-alt"></i></span>
                                    <a href="tel:+919009497975"> +91-9097379339 </a>, <a href="tel:+916266766137">+91-6204712391 </a>
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="mr-2"><i className="fas fa-envelope"></i></span>
                                    <a href="mailto:info@OnlinesPey.com">onlinespey@gmail.com</a>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2"><i className="fas fa-clock"></i></span>
                                    Office Time: Mon - Sat (10am to 7pm)
                                </li>
                            </ul>
                            <ul className="flex space-x-4">
                                <li><a href="https://www.facebook.com/OnlinesPey" className="text-gray-800 hover:text-blue-500"><i className="fab fa-facebook"></i></a></li>
                                {/* Add more social media links here */}
                            </ul>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form className="bg-white p-8 shadow rounded">
                                <h2 className="text-2xl font-bold mb-4">Free Demo ID</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Mobile No." className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <select className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500">
                                            <option value="">Please select state</option>
                                            {/* Add state options here */}
                                        </select>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Pin Code" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                                <textarea placeholder="Your Message" rows="4" className="w-full mt-4 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
                                <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
            <Footer/>
   </>
  )
}

export default Contactus
