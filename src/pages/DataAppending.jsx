import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import explore from "../assets/images/explore.png";
import Card from "../components/Card"
import FAQ from '../components/FAQ';
import { FaEnvelope, FaPhoneAlt, FaMailBulk, FaFacebook } from 'react-icons/fa';




const TechnologyEmailList = () => {

    const [expanded, setExpanded] = useState(null);

    const toggleFAQ = (index) => {
        setExpanded(expanded === index ? null : index);  // Toggle between showing and hiding the FAQ
    };

    return (
        <div>
            <Navbar />

            <HeroSection
                heading="Data Appending Services"
                subheading=
                {<div>
                    <p className='text-justify'>Enhance your customer outreach with our top-tier data appending services. As a leading B2B provider, we help fill gaps in your prospect lists, ensuring you connect with the right audience across all channels.</p>
                    <p className='text-justify'>With our services, you can enrich your database by adding missing details like business phone numbers and email addresses, enabling timely and effective engagement.</p>
                </div>}
            />

            <div className="container mx-auto content-section lg:pl-32 px-8">
                <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 text-justify">

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">What is Data Appending?</h4>
                            <p className="mb-4 uppercase">
                                Data appending is the process of adding missing or rectifying incorrect information such as e-mail IDs, phone numbers, addresses, job titles, home value, lifestyle information, and demographic data of your target audience. These services can enhance the scope of your current customer database and thereby help your business grow exponentially as well as your revenue.
                            </p>
                            <p className='mb-4'>Data append processes can help you hold control over your business prospects, customer acquisition, product marketing, conversion rates, lead generation, and more. Simply put, data appending is all about turning your business into a wholesome data-driven experience.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">What is Email Appending?</h4>
                            <p className="mb-4">
                                Email appending is the process of adding an email address to an existing customer list. It is the most popular technique among B2B marketers for directly communicating with their clients through email IDs and accurate contact data.
                            </p>
                            <p className='mb-4'>
                                It’s a very easy process where customer data elements such as first name, last name, and postal address are taken down and matched to the database of a vendor to obtain their email addresses.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-4">HOW WE DO DATA APPENDING</h3>
                            <p className='mb-4'>
                                As one of the leading data append companies, we at{' '}
                                <Link
                                    to="/"
                                    className='text-[#d53369] font-bold hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]'>
                                    Hillborn Solutions
                                </Link>
                                {' '}append your database with relevant contact information as per your business requirements.
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Send the database you want to be appended to.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Then our data experts will match them against our highly robust and reliable internal databases.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Enhances your brand reputation management along with campaign performance.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    From there, we will add specific contact details to your current database(s) based on your request.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    You will receive a database that is ready to use after the data append is rich with accurate information and actionable data of your targeted customers.
                                </li>
                            </ul>


                        </div>

                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-4">BENEFITS OF OUR DATA APPENDING SERVICE:</h3>
                            <p className='mb-4'>
                                At Hillborn Solutions, we deliver the best database appending services to help businesses acquire, manage, and retain their clients with accurate customer records.
                            </p>
                            <p className='mb-4'>
                                Make the most out of this opportunity and enhance your brand’s market presence and grow your business to its full potential. With our data enrichment, you can:
                            </p>
                            <ul className="pl-5 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Reach the right leads at the right time
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Level up your engagement with leads
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Increase the value of your data quality
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Get accurate and updated data for better responses
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Achieve greater customer insights for targeted campaigning
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Find more potential customers with similar profiles
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Gain more transparency in your marketing efforts
                                </li>
                            </ul>


                        </div>

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">How Much Does Our Data Appending Cost?
                            </h4>
                            <p className="mb-4">
                                As the best data appending company, we strive hard to provide the best customer data based on our client requirements. In order to give you the most accurate records, we recommend you upload your desired list.
                            </p>
                            <p className='mb-4'>
                                Before you move forward with your order, you will be given a price estimate based on the list you uploaded. In general, pricing varies from one file to another based on the size of your database.
                            </p>
                        </div>


                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 pb-4">
                        <div className="sidebar bg-gray-100 p-4 mb-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Related Resources</h3>
                            <ul className=" pl-5">
                                <li><a href="/industry-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Industry Email Lists</a></li>
                                <li><a href="/healthcare-email-list" className="text-blue-500">Healthcare Email List</a></li>
                                <li><a href="/technology-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Technology Users Email List</a></li>
                                <li><a href="/international-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">International Email List</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-screen-xl">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full">
                        {/* Left Column (Text) */}
                        <div className="lg:w-2/3 lg:text-left space-y-4 mb-8 lg:mb-0 text-justify">
                            <h2 className="text-xl font-bold text-black uppercase">Explore More Opportunities With Hillborn Solutions Data Appending Services</h2>
                            {/* <p className="text-gray-700">Incomplete or inaccurate data can dampen your chances of running a successful email marketing campaign or closing a sales deal. Enhance your existing database with Hillborn Solutions’ best data append services.</p> */}
                            <div className="mt-8 text-justify">
                                <h3>Incomplete or inaccurate data can dampen your chances of running a successful email marketing campaign or closing a sales deal. Enhance the scope of your existing database and explore more opportunities with Hillborn Solutions best data append services.</h3>
                                <h3>We understand the challenges you face while communicating with prospects. Furthermore, our services add only the relevant information that makes your marketing campaign streamlined and effective.</h3>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="lg:w-1/3 flex justify-center p-8 mb-8 lg:mb-0">
                            <img src={explore} alt="Our Team" className="rounded-lg shadow-md" width="350" height="250" />
                        </div>
                    </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                    {/* Using the Card component for each card */}
                    <Card
                        Icon={FaEnvelope}
                        heading="EMAIL APPENDING"
                        subheading="Our email append service adds high-quality verified email addresses to your database to provide an additional way to market to your customers."
                    />
                    <Card
                        Icon={FaPhoneAlt}
                        heading="PHONE APPENDING"
                        subheading="Our phone append service adds the most up-to-date mobile phone numbers along with landline numbers to your customer file for successful telemarketing."
                    />
                    <Card
                        Icon={FaMailBulk}
                        heading="POSTAL ADDRESS APPENDING"
                        subheading="This postal address append service adds accurate and up-to-date postal addresses to your database for successful direct mailing efforts."
                    />
                    <Card
                        Icon={FaFacebook}
                        heading="SOCIAL MEDIA APPENDING"
                        subheading="Social media append service adds up-to-date & verified profiles of key decision-makers from leading companies who are active on social media."
                    />
                </div>

                <div className="max-w-4xl mx-auto p-6">
                    <h2 className="text-2xl font-bold text-center mb-2">Frequently Asked Questions</h2>
                    <div className="bg-white shadow-md rounded-lg">


                        {/* FAQ Item 1 */}
                        <div className="faq-item border-b">
                            <div
                                className="flex items-center justify-between py-4 px-6 cursor-pointer"
                                onClick={() => toggleFAQ(0)}
                            >
                                <h3 className="font-semibold sm:text-base text-sm">
                                    WHAT ARE THE VARIOUS DATA APPENDING SERVICES DO YOU OFFER?
                                </h3>
                                <span className="text-xl">{expanded === 0 ? '-' : '+'}</span>
                            </div>
                            {expanded === 0 && (
                                <div className="px-6 pb-4">
                                    <p>We provide a wide range of data appending services, including email appending, phone appending, address appending, and company data appending, to enrich your existing databases and ensure higher accuracy.</p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="faq-item border-b">
                            <div
                                className="flex items-center justify-between py-4 px-6 cursor-pointer"
                                onClick={() => toggleFAQ(1)}
                            >
                                <h3 className="font-semibold sm:text-base text-sm">
                                    WHAT TYPE OF SOURCES DO YOU USE TO APPEND YOUR B2B DATA?
                                </h3>
                                <span className="text-xl">{expanded === 1 ? '-' : '+'}</span>
                            </div>
                            {expanded === 1 && (
                                <div className="px-6 pb-4">
                                    <p>We source our data from various licensed public records, surveys, social media platforms, webinars, SEC filings, and other reliable B2B databases to ensure quality and accuracy.</p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="faq-item border-b">
                            <div
                                className="flex items-center justify-between py-4 px-6 cursor-pointer"
                                onClick={() => toggleFAQ(2)}
                            >
                                <h3 className="font-semibold sm:text-base text-sm">
                                    WHY CHOOSE Hillborn Solutions B2B DATA APPEND SERVICES?
                                </h3>
                                <span className="text-xl">{expanded === 2 ? '-' : '+'}</span>
                            </div>
                            {expanded === 2 && (
                                <div className="px-6 pb-4">
                                    <p>Hillborn Solutions offers a comprehensive and effective approach to data appending, with highly accurate data, industry-specific targeting, and personalized services tailored to your business needs.</p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="faq-item border-b">
                            <div
                                className="flex items-center justify-between py-4 px-6 cursor-pointer"
                                onClick={() => toggleFAQ(3)}
                            >
                                <h3 className="font-semibold sm:text-base text-sm">
                                    WHAT ARE THE BENEFITS OF B2B DATA APPENDING SERVICES?
                                </h3>
                                <span className="text-xl">{expanded === 3 ? '-' : '+'}</span>
                            </div>
                            {expanded === 3 && (
                                <div className="px-6 pb-4">
                                    <p>Our B2B data appending services help you enhance data accuracy, improve lead generation, increase engagement, and provide better targeting for marketing campaigns, leading to a higher ROI.</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};



export default TechnologyEmailList;
