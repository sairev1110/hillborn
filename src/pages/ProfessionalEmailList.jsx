import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer'; 

const ProfessionalEmailList = () => {
    return (
        <div>
            <Navbar />

            <HeroSection
                heading="Professionals Email List"
                subheading={
                    <div>
                        <p className="mb-6 text-justify">
                            Connect with top professionals across industries using Collabline Solution’s accurate Professionals Email List. From engineers to lawyers, our responsive database ensures your marketing reaches the right audience, driving quality leads.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="table-auto w-full mt-4 mb-6 border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2">List of Featured Professionals Email List</th>
                                        <th className="border px-4 py-2">List of Featured Professionals Email List</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['CEO Email List', 'Real Estate Agents Email List'],
                                        ['CTOs Email List', 'CFO Email List'],
                                        ['CMO Email Addresses List', 'Property Manager Mailing List'],
                                        ['CIO Email List', 'Architect Mailing List'],
                                        ['Accountants Email List', 'Engineer Email List'],
                                    ].map(([left, right], idx) => (
                                        <tr key={idx}>
                                            <td className="border px-4 py-2">{left}</td>
                                            <td className="border px-4 py-2">{right}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />

            <div className="container mx-auto content-section">
                <div className="flex flex-col lg:flex-row space-x-0 lg:pl-32 lg:space-x-8 px-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
                        <h3 className="text-xl font-bold mt-6 mb-4">Key Features of Professionals Email List</h3>
                        <ul className="list-disc pl-5 mb-6 text-justify">
                            <li>Connect with the C-level executives and other decision-making professionals from businesses of all sizes using our Professionals email list.</li>
                            <li>Our list of Professionals email database is an ideal resource for B2B marketers who are seeking to develop the best relationships with decision-makers.</li>
                            <li>Reach out to accountants, lawyers, engineers, architects, property managers and many more across all industries using our Professionals email addresses database.</li>
                            <li>Our Professionals mailing addresses database offers an extensive range of business-to-business information that can help you reach your targeted audience.</li>
                            <li>With our high-quality Professionals mailing list, you can build connections with specific audiences who have relevant industry knowledge and the power to make swift decisions.</li>
                            <li>This file helps you to reach highly targeted prospects in the industry that can guarantee the best results through marketing campaigns.</li>
                            <li>Using our Professionals email list, enhance your direct mail and telemarketing efforts geared towards these real estate industry executives.</li>
                        </ul>

                        <div className="data-counts mb-6">
                            <h4 className="text-xl font-bold">Data Counts for Professionals Mailing List</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full mb-4 border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border-r border-b text-left">Data Type</th>
                                            <th className="px-4 py-2 border-b text-left">Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Professionals contacts', '172,000'],
                                            ['Professionals direct dial numbers', '170,860'],
                                            ['Professionals postal mailing address', '170,750'],
                                        ].map(([type, count], idx) => (
                                            <tr key={idx}>
                                                <td className="px-4 py-2 border-r border-b">{type}</td>
                                                <td className="px-4 py-2 border-b">{count}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
                        <div className="sidebar bg-gray-100 p-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Related Resources</h3>
                            <ul className=" pl-5">
                                {['Physicians Email List', 'Nurses Email List', 'Pharmacist Email List', 'Medical Device Manufacturers Email List', 'Custom-Built Professionals Email List'].map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="text-blue-500 hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfessionalEmailList;
