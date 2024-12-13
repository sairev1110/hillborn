import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import join_team from "../assets/images/join_team.jpg";
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
                heading="B2B Email Appending Services"
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
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">What is Email Appending?</h4>
                            <p className="mb-4">
                                Email Appending is one of the on-demand marketing practices which involves taking prospects’ data such as name, postal address, phone number, or other social media information and matching it against our repository to obtain the right deliverable email addresses. To keep it simple, it is the process of appending the email addresses of the existing customers which have been missing from your current prospect list. This email list appending helps B2B organizations in revamping their marketing efforts by providing the most actionable data and qualified leads. This, in turn, helps you in acquiring quality email lists as well as higher ROI.
                            </p>
                            <p className='mb-4'>Data append processes can help you hold control over your business prospects, customer acquisition, product marketing, conversion rates, lead generation, and more. Simply put, data appending is all about turning your business into a wholesome data-driven experience.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-4">HOW DO WE DO EMAIL APPENDING?</h3>
                            <p className='mb-4'>
                                In order to have a successful email marketing campaign, you need an accurate email database. At Hillborn Solutions, we turn your existing marketing database into a powerful marketing tool by adding updated & verified business and consumer email addresses. Give us your mailing lists and our Service Bureau will match it against a comprehensive, constantly updated database of 75+ million records. With over 65% match rates, we’ll add all the missing email addresses as much as possible using our best B2B Email Append service. Here’s how we do:
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Submit your existing customers’ list to us which you want to append email address.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Later, our team of data experts match your entire customer list against our global pool of data.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Then we will identify and remove the incorrect and invalid email addresses which are not in use.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    After that, we add up-to-date, opt-in, correct email addresses of clients to your existing customer list.
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
                            <h3 className="text-xl font-bold mt-6 mb-4">WHY CHOOSE Hillborn Solutions B2B EMAIL APPEND SERVICE?</h3>
                            <p className='mb-4'>
                                At Hillborn Solutions, we understand the importance of a deliverable and responsive email data. Thus, we strive hard to provide the best email appending services and thereby ensure that your datasets are appended with the most accurate data. To ensure high deliverability and minimal bounce rates for your emails, we verify each and every append email addresses twice before sending. With our data append services, we help get your email marketing messages delivered to the right audience. By scrubbing all appended emails through the multi-step verification process, we will remove all the invalid email addresses from your prospect lists. Hence, you can ensure the highest deliverability rate for your marketing campaigns with our data append services.
                            </p>
                            <p className='mb-4'>
                                You can choose our email append service for the following reasons:
                            </p>
                            <ul className="pl-5 mb-6 space-y-2">
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Our B2B email appending offers over a 65% match rate.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    The industry-leading database comprises more than 75 million records.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Our email appended database is updated every 90 days to ensure valid data.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    With our email appends, you can generate quality leads with a higher return on investment.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Our email append services are highly specific to the priority of timeliness.
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    Find more potential customers with similar profiles
                                </li>
                                <li className="flex items-start items-center">
                                    <i className="fa-regular fa-square-check text-blue-500 mr-2"></i>
                                    With our email append services, businesses can network efficiently with sellers, dealers, and mutual potential consumers.
                                </li>
                            </ul>


                        </div>

                        <div>
                            <h4 className="text-xl font-bold mt-6 mb-2 uppercase">How Much Does Our Email Appending Cost?</h4>
                            <p className="">
                                As one of the industry-leading business email appending data services provider, we strive hard to provide the best email append solution based on our client requirements. In order to give you the most accurate customer email addresses, we recommend you to upload your desired email list. Before you move forward with your order, you will be given a price estimate based on the list you uploaded. In general, pricing varies from one file to another based on the size of your database.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mt-6 mb-4 uppercase">Explore More Opportunities
                            </h4>
                            <h4 className="text-xl font-bold mt-6 mb-4 uppercase">With Hillborn Solutions Email Appending Service</h4>
                            <p className="mb-4">
                                Incomplete or inaccurate data can dampen your chances of finding new market opportunities and closing a sales deal. Enhance the scope of your existing data and explore more opportunities with Hillborn Solutions Email Append Service. As one of the best Email Append companies, we work towards providing our clients with the most recent and accurate email information of the target audience base. With correct and accurate contact data in hand, you can find your potential clients quite easily. Our B2B Email append data services are all about turning your business into a wholesome data-driven experience with informed business decisions and improved performance.
                            </p>
                        </div>

                        

                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 pb-4">
                        <div className="sidebar bg-gray-100 p-4 mb-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">Related Email List </h3>
                            <ul className=" pl-5">
                                <li><a href="/technology-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Technology Users Email List</a></li>
                                <li><a href="/professional-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Professional Email List</a></li>
                                <li><a href="/industry-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Industry Email List</a></li>
                                <li><a href="/international-email-list" className="text-blue-600 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">International Email List</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h4 className="text-xl font-bold mt-6 mb-4 uppercase">What We Cover in Our Email Appending Services?</h4>
                    <p className="mb-4">
                        Take full control over your lead generation process by fixing the missing fields with accurate & up-to-date customer data offered by our niche Email Appending Services.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
                        {/* Using the Card component for each card */}
                        <Card
                            Icon={FaEnvelope}
                            heading="Consumer Email Append"
                            subheading="Consumer Email Append service uses the customer’s name, phone numbers, postal addresses, and other personal information to get the right email address of the targeted customer."
                        />
                        <Card
                            Icon={FaEnvelope}
                            heading="Business Email Append"
                            subheading="Business Email Appending service uses the company’s name, location, annual revenue, employee size, and more to identify the right business email address."
                        />
                        <Card
                            Icon={FaEnvelope}
                            heading="Reverse email append"
                            subheading="If you have email address of your prospects, but you need other records like name, direct mail, social media handles etc. then acquire that through reverse email address append."
                        />
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
                                    WHAT ARE THE VARIOUS EMAIL APPENDING SERVICES DO YOU OFFER?
                                </h3>
                                <span className="text-xl">{expanded === 0 ? '-' : '+'}</span>
                            </div>
                            {expanded === 0 && (
                                <div className="px-6 pb-4">
                                    <p>We offer various types of E-mail Appending Services such as business Email Appending, Consumer Email Appending and Reverse Email Appending.</p>
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
                                    WHAT IS YOUR B2B2 EMAIL APPEND MATCH RATE?
                                </h3>
                                <span className="text-xl">{expanded === 1 ? '-' : '+'}</span>
                            </div>
                            {expanded === 1 && (
                                <div className="px-6 pb-4">
                                    <p>On an average our email appends match rate ranges between 25-30% of our client’s database. If the quality of the client’s email list is good and effective, then it may exceed up to 40%. Our highest Email Appending Match rate so far is 65%.</p>
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
                                    HOW LONG DOES YOUR BUSINESS EMAIL APPENDING PROCESS TAKE?
                                </h3>
                                <span className="text-xl">{expanded === 2 ? '-' : '+'}</span>
                            </div>
                            {expanded === 2 && (
                                <div className="px-6 pb-4">
                                    <p>Our Business Email Appending process consumes nearly 3 to 4 days to complete, and it depends on the volume of your database. After adding the right email addresses to your database, our team re-verifies all the records using an in-house tool to ensure its quality.</p>
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
                                    HOW ACCURATE IS YOUR EMAIL APPENDING SERVICES?
                                </h3>
                                <span className="text-xl">{expanded === 3 ? '-' : '+'}</span>
                            </div>
                            {expanded === 3 && (
                                <div className="px-6 pb-4">
                                    <p>Our Email Append Services is more than 95% accurate. Our team of data experts utilizes all verification and validation processes to check the deliverability of each and every email address. Later, we remove all the inaccurate email IDs.</p>
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
