import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import explore from "../assets/images/explore.png";



const TechnologyEmailList = () => {

    const [expanded, setExpanded] = useState(null);

    const toggleFAQ = (index) => {
        setExpanded(expanded === index ? null : index);  // Toggle between showing and hiding the FAQ
    };

    return (
        <div>
            <Navbar />

            <HeroSection
                heading="Data Licensing Services"
                subheading=
                {<div>
                    <p className='text-justify'>Data Licensing Services have become a crucial element for companies and businesses of all sizes. We recognise that, data is the way forward in today’s marketing industry. With the tremendous rise in technology leading to increased competition, marketers are embracing the need for true data that is not only clean, accurate, and verified, but secure and authorised as well. As a trusted data partner, Hillborn Solutions ensures data of the highest quality to aid your brand building process.</p>
                </div>}
            />

            <div className="container mx-auto content-section lg:pl-32 px-8">
                <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 text-justify">

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">Give Practical Insights to Your Data with Our Data Licensing Service</h4>
                            <p className="mb-4">
                                The premium B2B Data Licensing service from Hillborn Solutions provides safe access to the most accurate data. Our Data Licensing opens the possibilities of reselling, adds verification processes while reducing data acquisition and retention expenses. As a data licensor, we address issues related to data maintenance, control, security policy, protocols and practices, especially where data is confidential, personal, financial, technical, or other information.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-4">Benefits of Our Data Licensing Service</h3>
                            <p className='mb-4'>
                                Check out how our data licensing service benefits b2b marketers in different possible ways:
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Maximize the value of your b2b databases.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Navigate and identify target markets through secure access.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Flexibility in database management.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Customizable data sets that suit your unique requirements.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Renew or upgrade your license easily with few steps.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Frequent quality checks provided by our team of data experts.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Reach out to your customers on a large scale through data purchase option.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Customizable & Scalable Services
                                </li>
                            </ul>

                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 pb-4">
                        <div className="sidebar bg-gray-100 p-4 mb-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">DATA HYGIENE SERVICES </h3>
                            <ul className=" pl-5">
                                <li><a href="/b2b-email-appending-services" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">B2B EMAIL APPENDING SERVICES</a></li>
                                <li><a href="/data-appeding-services" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">DATA APPENDING SERVICES</a></li>
                                <li><a href="/phone-appending-srvices" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">PHONE APPENDING SERVICES</a></li>
                                <li><a href="/data-cleansing-services" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">DATA CLEANSING SERVICES</a></li>
                                <li><a href="/data-licensing-services" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">DATA LICENSING SERVICES</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-screen-xl">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full">
                        {/* Left Column (Text) */}
                        <div className="lg:w-2/3 lg:text-left space-y-4 mb-8 lg:mb-0">
                            <h2 className="text-xl font-semibold text-black uppercase">Explore More Opportunities</h2>
                            <h2 className="text-xl font-bold text-black uppercase">With Hillborn Solutions Data Licensing Process</h2>
                            {/* <p className="text-gray-700">Incomplete or inaccurate data can dampen your chances of running a successful email marketing campaign or closing a sales deal. Enhance your existing database with Hillborn Solutions’ best data append services.</p> */}
                            <div className="mt-8 text-justify">
                                <h3>At Hillborn Solutions, we cover all the attributes which are required for flexible Data Licensing Service. At every stage of data licensing, we follow stringent process to ensure compliance with the GDPR, CAN-SPAM laws, and other regulations. We facilitate b2b marketers with customized database that covers name, job-title, company name, employee size, geographical locations, and more. Furthermore, we use multi-party levels to generate an extensive database that promotes your company’s products and services with scalable, customizable and trusted data.
                                </h3>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="lg:w-1/3 flex justify-center p-8 mb-8 lg:mb-0">
                            <img src={explore} alt="Our Team" className="rounded-lg shadow-md" width="350" height="250" />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};



export default TechnologyEmailList;
