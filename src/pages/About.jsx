import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import welcome from "../assets/images/welcome.png";
import mail_soln from "../assets/images/mail_soln.png";
import join_team from "../assets/images/join_team.png";

const About = () => {
    return (
        <>
            <Navbar />
            <HeroSection />


            <div className="container pb-16 pt-16 pl-16 pr-8 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full">
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4 mb-8 lg:mb-0">
                        <h1 className="text-2xl uppercase font-bold text-gray-800">Welcome to Our Hillborn Solutions</h1>
                        <h2 className="text-2xl font-semibold text-gray-600">WHAT WE DO</h2>
                        <div className="space-y-8 mt-8">
                            <div className="flex items-start space-x-4">
                                <div className="text-left">
                                    {/* <h3 className="font-semibold text-xl text-gray-800">Business Development Manager</h3> */}
                                    <p className="text-gray-700 tex-justify">Hillborn Solutions are dedicated to acknowledgment of the significant elements for client success,
                                        blending our skill across industries and business functions with our modern study...</p>
                                </div>
                            </div>
                            {/* <div className="flex items-start space-x-4">
                            
                            </div> */}
                            <div className="flex items-start space-x-4">
                                {/* <div className="w-6 h-6">
                                    <i className="text-gray-700 fas fa-circle fa-xs"></i>
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-xl text-gray-800">Business Solutions Analyst</h3>
                                    <p className="text-gray-700">Analyzing business needs, offering solutions, and optimizing processes to drive efficiency and success.</p>
                                </div> */}
                                <ul className="pl-8 list-disc text-left text-gray-700 space-y-2">
                                    <li>Multi-Channel Marketing Data</li>
                                    <li>Customized Data Solutions</li>
                                    <li>Authentic Marketing Lists</li>
                                    <li>Affordable Mailing Lists</li>
                                    <li>Global Market Coverage</li>
                                    <li>Guaranteed Campaign Success</li>
                                    <li className='list-none'></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                        <img src={welcome} alt="Our Team" className="rounded-lg shadow-md" width="350" height="250" />
                    </div>
                </div>
            </div>

            <section className="bg-white border-b"></section>

            <div className="container pb-16 pl-16 pr-8 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center max-w-screen-xl">
                {/* Section 1: Image on Left, Text on Right */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full">
                    <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                        <img src={mail_soln} alt="Meeting" className="rounded-lg shadow-md hidden sm:block" width="350" height="250" />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h1 className="text-2xl font-bold text-gray-800">WOULD YOU LIKE TO SEE</h1>
                        <h2 className="text-2xl font-semibold text-gray-600">Helping Mailing Solutions</h2>
                        <p className="text-gray-700 leading-relaxed text-justify pr-4">
                            Hillborn Solutions helps organizations achieve enterprise-wide total data quality by providing conventional mailing solutions and services around the world. We have built our reputation solving extremely tough data quality and mailing solutions problems and are today seen as highly reliable, competent and qualitatively superior by our clients.
                        </p>
                    </div>
                </div>
            </div>

            <section className="bg-white border-b"></section>

            {/* Text on Left, Image on Right */}
            <div className="container pb-16  pl-16 pr-8 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full">
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4 mb-8 lg:mb-0">
                        <h1 className="text-2xl uppercase font-bold text-gray-800">Join Our Team</h1>
                        <h2 className="text-2xl font-semibold text-gray-600">Meet Our Experts</h2>
                        <div className="space-y-8 mt-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-6 h-6">
                                    <i className="text-gray-700 fas fa-circle fa-xs"></i>
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-xl text-gray-800">Business Development Manager</h3>
                                    <p className="text-gray-700 text-text-justify">Driving new business opportunities, building strategic relationships, and boosting company growth.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-6 h-6">
                                    <i className="text-gray-700 fas fa-circle fa-xs"></i>
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-xl text-gray-800">Project Lead</h3>
                                    <p className="text-gray-700">Leading and overseeing project timelines, resources, and team coordination to ensure successful project delivery.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-6 h-6">
                                    <i className="text-gray-700 fas fa-circle fa-xs"></i>
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-xl text-gray-800">Business Solutions Analyst</h3>
                                    <p className="text-gray-700">Analyzing business needs, offering solutions, and optimizing processes to drive efficiency and success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                        <img src={join_team} alt="Our Team" className="rounded-lg shadow-md" width="350" height="250" />
                    </div>
                </div>
            </div>









            <Footer />
        </>
    );
};

export default About;
