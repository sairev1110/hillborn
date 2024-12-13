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
                heading="Data Cleansing Services"
                subheading=
                {<div>
                    <p className='text-justify'>Having a list of accurate and clean data will streamline your multi-channel marketing campaigns, sales outreach, and newsletters. At Hillborn Solutions, we brought a whole new way of updating and cleansing your email addresses with our best-in-class data cleansing services. It provides you a competitive edge over your marketers with an updated, accurate, and validated marketing database. This service allows you to upload bulk lists of the email addresses to check for bounces, wrong addresses, and duplicates which results in a clean and up-to-date list that is ready for use.</p>
                </div>}
            />

            <div className="container mx-auto content-section lg:pl-32 px-8">
                <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 text-justify">

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">WHAT IS DATA CLEANSING?</h4>
                            <p className="mb-4">
                                Simply put, data cleansing is the process of eliminating, upgrading, and editing information within a database in order to maintain top-notch data quality. This data analysis processing gives access to segmented and accurate data, which helps organizations to streamline their CRM productivity while focusing on multi-channel marketing initiatives and business operations.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-2 uppercase">HOW DO WE DO DATA CLEANSING?</h4>
                            <p className="">
                                At Hillborn Solutions, our data cleaning experts work towards delivering an error-free customer list that improves and centralize your business operations management efforts. Through a full suite of data cleaning services, our team ensures to generate accurate contact information without compromising on data quality while supporting you with successful email delivery. Here’s, how our data cleansing process works:
                            </p>
                            <p className='font-semibold'>
                                Collect and analyze data
                                <p className='font-normal'>
                                    Whenever we receive a database from client, we perform data processing to identify any inconsistent records, and check for data anomalies that re present in the database.
                                </p>
                            </p>
                            <p className='font-semibold'>
                                Segmenting data fields
                                <p className='font-normal'>
                                    Later our team of data experts separate inaccurate records from correct records. This process helps to erase all the irrelevant data fields and identify gaps in the database.
                                </p>
                            </p>
                            <p className='font-semibold'>
                                Eliminate duplicate records
                                <p className='font-normal'>
                                    After the successful segmentation of data fields and data profiling, all the duplicate and inconsistent data records are identified and eliminated to resolve redundancy in the database.
                                </p>
                            </p>
                            <p className='font-semibold'>
                                Standardize the cleansing procedure
                                <p className='font-normal'>
                                    Once the data validation is over, the information is standardized to a common format for easy integration into any CRM. This standardized data can be used to run data-driven marketing functions.
                                </p>
                            </p>
                            <p className='font-semibold'>
                                Integrity checks
                                <p className='font-normal'>
                                    Finally the cleansed data undergoes multiple stringent checks to maintain data quality. Further, our data cleansing experts also audit the contact records to ensure that the data is actionable.
                                </p>
                                <p className='font-normal'>
                                    At last, we forward cleansed database to our clients in their required format!
                                </p>
                            </p>
                        </div>


                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">WHY CHOOSE Hillborn Solutions' DATA CLEANSING SERVICE?</h4>
                            <p className="mb-4">
                                As one of the leading data cleansing companies, we can efficiently handle all data clean up services and ensure that your data is up-to-date and error-free. With our data standardization and validation services, you can add considerable value to your data. At Hillborn Solutions, we understand and are capable of deducting, scrubbing, and cleaning data from any context and any source. Once the initial cleansing task has been accomplished, we then standardize your data to perform effectively with all of your data management systems and software. Furthermore, our data services can make your data actionable with completely accurate and fresh records.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-4">WHAT ARE THE BENEFITS OF OUTSOURCING DATA CLEANSING TO Hillborn Solutions?</h3>
                            <p className='mb-4'>
                                Using an outdated or incorrect b2b marketing data always end up with wasting resources on returned email, incorrect mailing lists, and other inaccurate contact information. Hence, keeping your database up-to-date is the top-most priority to deliver the maximum results for your marketing activities. At Hillborn Solutions, we strive hard to improve the integrity of your data and ensures your messages get delivered to the right contacts with the help of our data enrichment services. With our data validation service, we provide our clients to reach their business goals with the following benefits:
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Maximum Sales Outreach
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Effective Decision Making
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Enhanced Customer Acquisition
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Fresh and Accurate Data Records
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Adherence to Data Quality Management Norms
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Assured Cost Reduction
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Emphasis on Data Security and Data Confidentiality
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
                                <li><a href="/phone-appendingservices" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">PHONE APPENDING SERVICES</a></li>
                                <li><a href="/data-cleansing-services" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">DATA CLEANSING SERVICES</a></li>
                                <li><a href="/data-licensing-services" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">DATA LICENSING SERVICES</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-screen-xl">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full">
                        {/* Left Column (Text) */}
                        <div className="lg:w-2/3 lg:text-left space-y-4 mb-8 lg:mb-0 text-justify">
                            <h2 className="text-xl font-semibold text-black uppercase">Explore More Opportunities</h2>
                            <h2 className="text-xl font-bold text-black uppercase">WITH Hillborn Solutions DATA CLEANING SERVICES</h2>
                            {/* <p className="text-gray-700">Incomplete or inaccurate data can dampen your chances of running a successful email marketing campaign or closing a sales deal. Enhance your existing database with Hillborn Solutions’ best data append services.</p> */}
                            <div className="mt-8">
                                <h3 className='text-justify'>The efficiency of a business or a company depends on the quality of data that is being used to make informed business decisions. At Hillborn Solutions, our integrated data enrichment solution enables companies to manage all facets of data cleansing and data quality management from a single unified console. Moreover, we will de-dupe your business data to flag and remove duplicates, while outsourcing additional information such as new contact details, phone numbers and unique firmographics. Our data cleansing services remove the data decay and improve the accuracy and of the contact-records in less time.
                                </h3>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="lg:w-1/3 flex justify-center p-8 mb-8 lg:mb-0">
                            <img src={explore} alt="Our Team" className="rounded-lg shadow-md" width="350" height="250" />
                        </div>
                    </div>
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
                                    WHAT IS DATA SCRUBBING?
                                </h3>
                                <span className="text-xl">{expanded === 0 ? '-' : '+'}</span>
                            </div>
                            {expanded === 0 && (
                                <div className="px-6 pb-4">
                                    <p>Data scrubbing refers to one of the best business practices which involve identifying any outdated, incomplete, obsolete, invalid, and inaccurate data that exists in your database and making necessary rectification to make sure that the data available is precise, current, and complete.</p>
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
                                    WHAT IS THE DIFFERENCE BETWEEN DATA CLEANSING AND DATA SCRUBBING?
                                </h3>
                                <span className="text-xl">{expanded === 1 ? '-' : '+'}</span>
                            </div>
                            {expanded === 1 && (
                                <div className="px-6 pb-4">
                                    <p>Data Cleansing is the process of finding the corrupted, inaccurate, incomplete, and irrelevant parts of data from your customers’ list. This whole process refers to identifying the incomplete data and thereby removing it or replacing it with quality data records. While in the data scrubbing process, data that is incomplete, incorrect, improperly structured, or unorganized- requires minor add ups or need to be removed from the existing customer’s list.</p>
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
                                    HOW MUCH DOES OUR DATA CLEANSING COST?
                                </h3>
                                <span className="text-xl">{expanded === 2 ? '-' : '+'}</span>
                            </div>
                            {expanded === 2 && (
                                <div className="px-6 pb-4">
                                    <p>As one of the industry-leading data cleansing service providers, we offer the best data cleansing solutions based on our client requirements. In order to give you the most accurate customer email addresses, we recommend you to upload your desired customer list. Before you move forward with your order, you will be given a price estimate analysis based on the list you uploaded. In general, the pricing analysis for data cleansing services varies from one file to another based on the size of your database.</p>
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
