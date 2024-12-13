import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import explore from "../assets/images/explore.png";
import Card from '../components/Card';
import { FaPhoneAlt, FaPhoneSquareAlt, FaCheckCircle, FaUsers} from 'react-icons/fa';


const TechnologyEmailList = () => {

    const [expanded, setExpanded] = useState(null);

    const toggleFAQ = (index) => {
        setExpanded(expanded === index ? null : index);  // Toggle between showing and hiding the FAQ
    };

    return (
        <div>
            <Navbar />

            <HeroSection
                heading="Phone Appending Services"
                subheading=
                {<div>
                    <p className='text-justify'>Enhance your tele marketing reach and engage with your targeted customers with our best-in class Phone Appending services. We at Hillborn Solutions, can help you add landline or mobile phone numbers to your business database with our phone appending services. With a massive in-house data record of millions of executives all over the globe, our phone appending services offers high match rates and provides accurate telephone and mobile numbers. So, if you are still using outdated direct dial data of customers, we are here to help you with our Phone Appending Services.</p>
                </div>}
            />

            <div className="container mx-auto content-section lg:pl-32 px-8">
                <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 text-justify">

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">What is Phone Appending?</h4>
                            <p className="mb-4">
                                Phone Appending is one of the data-driven marketing practices which involves adding phone numbers to another type of contact data, most typically a name and address. To put it simple, it is the process of appending phone numbers of the existing customers which has been missing from your current prospect list. This phone number appending helps B2B organizations in revamping their marketing efforts by providing the most actionable data and qualified leads. This, in turn, helps you in acquiring quality contact lists as well higher ROI.
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
                            <h3 className="text-xl font-bold mt-6 mb-4">How Do We Do Phone Appending?</h3>
                            <p className='mb-4'>
                                In order to have a successful tele marketing campaign, you need an accurate direct dial database. At Hillborn Solutions, we turn your existing marketing database into a powerful marketing tool by adding updated & verified telephone numbers. Give us your contact lists and our Service Bureau will match it against a comprehensive, constantly updated database of 75+ million records. With over 65% match rates, we’ll add all the missing phone numbers as much as possible using our best Phone Append service. Here’s how we do:
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Submit your existing customers list to us which you want to append phone numbers.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Later, our team of data experts match your entire customer list against our global pool of data.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Then we will identify and remove the incorrect and invalid phone numbers which are not in use.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    After that, we add up-to-date, opt-in, correct phone numbers of clients to your existing customer list.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    To ensure you receive valid data, it is verified by our in-house verification software.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Eventually, your database is returned with high match rates and you only pay for validated records.
                                </li>
                            </ul>

                        </div>

                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-4">Why Choose Hillborn Solutions Phone Append Service?</h3>
                            <p className='mb-4'>
                                At Hillborn Solutions, we understand the importance of a direct dial data. Thus, we strive hard to provide best Phone Appending services and thereby ensure that your datasets are appended with the most accurate data. With our phone append services, we help you connect with your potential and existing customers. By scrubbing all appended phone numbers through the multi-step verification process, we will remove all the invalid phone numbers from your prospect lists. Hence, you can ensure successful outreach for your tele marketing campaigns.
                                <p>You can choose our phone append service for the following reasons:</p>
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Our Phone Appending offers high match rate.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Our phone appended database is updated every 90 days to ensure valid data.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    With our phone appending, you can generate quality leads with higher return on investment.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Our phone append services are highly specific with the priority of timeliness.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    With our phone append services, businesses can network efficiently with sellers, dealers, and mutual potential consumers.
                                </li>
                            </ul>

                        </div>

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">How Much Does Our Phone Appending Cost?</h4>
                            <p className="mb-4">
                            As one the industry-leading Phone Appending data services provider, we strive hard to provide best phone number append solution based on our client requirements. In order to give you the most accurate direct dial contact data, we recommend you to upload your desired database. Before you move forward with your order, you will be given a price estimate based on the list you uploaded. In general, pricing varies from one file to another based on the size of your database.
                            </p>
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
                        <div className="lg:w-2/3 lg:text-left space-y-4 mb-8 lg:mb-0">
                            <h2 className="text-xl font-semibold text-black uppercase">Explore More Opportunities</h2>
                            <h2 className="text-xl font-bold text-black uppercase">WITH Hillborn Solutions DATA CLEANING SERVICES</h2>
                            {/* <p className="text-gray-700">Incomplete or inaccurate data can dampen your chances of running a successful email marketing campaign or closing a sales deal. Enhance your existing database with Hillborn Solutions’ best data append services.</p> */}
                            <div className="mt-8">
                                <h3 className='text-justify'>Incomplete or inaccurate data can dampen your chances of finding new market opportunities and closing a sales deal. Enhance the scope of your existing data and explore more opportunities with Hillborn Solutions’ Phone Append Service. As one of the best phone append companies, we work towards providing our clients with the most recent and accurate telephone numbers of the target audience base. With correct and accurate contact data in hand, you can find your potential clients quite easily. Our phone append data services are all about turning your business into a wholesome data-driven experience with informed business decisions and improved performance.
                                </h3>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="lg:w-1/3 flex justify-center p-8 mb-8 lg:mb-0">
                            <img src={explore} alt="Our Team" className="rounded-lg shadow-md" width="350" height="250" />
                        </div>
                    </div>
                </div>


                {/* CARDS */}
                <div className="">
                    <h4 className="text-xl font-bold mt-6 mb-4 uppercase">WHAT WE COVER IN OUR PHONE APPENDING SERVICE?</h4>
                    <p className="mb-4">
                    Take full control over your lead generation process by fixing the missing fields with accurate & up-to-date customer data offered by our niche Phone Appending Services.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4'>
                        {/* Using the Card component for each card */}
                        <Card
                            Icon={FaPhoneAlt}
                            heading="Premium Phone Appending"
                            subheading="20 million directory assistance records, including home and commercial phone numbers, as well as New Connect phone numbers, are updated daily from telco-sourced directory assistance."
                        />
                        <Card
                            Icon={FaPhoneSquareAlt}
                            heading="Standard Phone Appending"
                            subheading="15 million consumer and corporate phone numbers are obtained from white pages listings and updated regularly."
                        />
                        <Card
                            Icon={FaCheckCircle}
                            heading="Phone Verification"
                            subheading="It includes verifying existing residential and business telephone numbers on a daily basis."
                        />
                        <Card
                            Icon={FaUsers}
                            heading="SOCIAL MEDIA APPENDING"
                            subheading="Social Media Append Service adds up-to-date & verified profiles of key decision-makers from leading companies who are active on social media."
                        />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};



export default TechnologyEmailList;
