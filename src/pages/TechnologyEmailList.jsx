import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const TechnologyEmailList = () => {
    return (
        <div>
            <Navbar />

            <HeroSection
                heading="Technology Email List"
                subheading={<p className='text-justify'>When it comes to reaching the right technology customers, use the most effective and accurate technology users email lists offered by Hillborn Solutions LLC. With more than 5 million records of technology users around the globe, you can choose our Technology users mailing list to grow your possibilities of communicating with IT professionals and other key decision-makers.</p>}
            />

            <div className="container mx-auto content-section lg:pl-32 px-8">
                <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 text-justify">
                        <h3 className="text-xl font-bold mt-6 mb-4">Key Features of Technology Email List</h3>
                        <ul className="list-disc pl-5 mb-6">
                            <li>Ensures the maximum response rate for all your multi-channel marketing campaigns targeting various technology users.</li>
                            <li>Helps generate quality leads and measure ROI for your business.</li>
                            <li>Enhances your brand reputation management along with campaign performance.</li>
                            <li>Customizable contact list of technology users tailored to your business needs.</li>
                            <li>Experience better engagement in email, postal, and telephone marketing campaigns using our highly-responsive technology users email list.</li>
                            <li>Reach technology vendors, executives, and users of software like Cloud Computing, Oracle, CRM, SAP, and more.</li>
                        </ul>

                        <h4 className="text-xl font-bold mt-6 mb-4">The Database Overview</h4>
                        <p className="mb-4">
                            Hillborn Solutions offers a highly accurate, valid, and responsive Technology Users List. Our goal is to provide marketers with the right contact information to boost their multichannel campaigns. We source our contact data from trusted, authentic sources and ensure that it remains updated and geo-targeted. With our database, you can target specific regions like the USA, UK, Canada, Australia, and more, ensuring maximum relevance for your campaigns.
                        </p>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full pb-4 lg:w-1/4">
                        <div className="sidebar bg-gray-100 p-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Related Resources</h3>
                            <ul className="list pl-5">
                                <li><a href="/industry-email-list" className="hover:underline text-blue-600  decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Industry Email Lists</a></li>
                                <li><a href="/healthcare-email-list" className="hover:underline text-blue-600  decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Healthcare Email List</a></li>
                                <li><a href="/technology-email-list" className="hover:underline text-blue-600  decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">Technology Users Email List</a></li>
                                <li><a href="/international-email-list" className="hover:underline text-blue-600  decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">International Email List</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technology Email List by Category */}
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Technology Email List By Category</h2>
                <div className="pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="/sap-users-email-list" className="text-blue-500">SAP Users Email List</a></li>
                        <li><a href="/salesforce-crm-users-list" className="text-blue-500">Salesforce CRM Users List</a></li>
                        <li><a href="/netsuite-users-list" className="text-blue-500">NetSuite Users List</a></li>
                        <li><a href="/microsoft-users-email-list" className="text-blue-500">Microsoft Users Email List</a></li>
                        <li><a href="/tableau-customers-list" className="text-blue-500">Tableau Customers List</a></li>
                        <li><a href="/quickbooks-online-users-email-list" className="text-blue-500">QuickBooks Online Users Email List</a></li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="/microsoft-publishers-users-list" className="text-blue-500">Microsoft Publishers Users List</a></li>
                        <li><a href="/peoplesoft-users-list" className="text-blue-500">PeopleSoft Users List</a></li>
                        <li><a href="/quickbooks-users-list" className="text-blue-500">QuickBooks Users List</a></li>
                        <li><a href="/aws-customers-list" className="text-blue-500">AWS Customers List</a></li>
                        <li><a href="/ibm-mainframe-users-list" className="text-blue-500">IBM Mainframe Users List</a></li>
                        <li><a href="/vmware-customers-list" className="text-blue-500">VMWare Customers List</a></li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="/slack-customers-list" className="text-blue-500">Slack Customers List</a></li>
                        <li><a href="/zoom-users-email-list" className="text-blue-500">Zoom Users Email List</a></li>
                        <li><a href="/servicenow-customer-list" className="text-blue-500">ServiceNow Customer List</a></li>
                        <li><a href="/sage-users-email-list" className="text-blue-500">Sage Users Email List</a></li>
                        <li><a href="/siebel-users-email-list" className="text-blue-500">Siebel Users Email List</a></li>
                        <li><a href="/workday-customers-list" className="text-blue-500">Workday Customers List</a></li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TechnologyEmailList;
