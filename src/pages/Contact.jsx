import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <HeroSection heading='Contact Us' subheading='We would love to hear from you' showButton={false} />

            {/* Contact Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Points Section */}
                    <div>
                        <div className="text-center mb-12">
                            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                                Get Expert Assistance For Your B2B Data Requirements Through Few Clicks!
                            </h1>
                            <h2 className="text-2xl text-gray-600 mt-4">
                                Have meaningful conversations by leveraging complete, accurate, and actionable contact data and intelligence.
                            </h2>
                        </div>
                        <ul className="list-disc list-outside space-y-6 pl-10 text-left text-gray-700 max-w-xl mx-auto">
                            <li>
                                <strong>Detailed Contact Data</strong> on key buying roles, including the CTO, CIO, CISO, and more.
                            </li>
                            <li>
                                <strong>Direct Dial Numbers</strong>, email addresses, and physical locations of targeted prospects.
                            </li>
                            <li>
                                <strong>Real-Time Insights</strong> about companies, including employee and revenue growth rates.
                            </li>
                            <li>
                                <strong>Unlimited Access</strong> to the highest quality B2B contact data available.
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">Get in Touch</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-800">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-4 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-800">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-4 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact" className="block text-gray-800">
                                    Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    className="w-full p-4 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="requirements" className="block text-gray-800">
                                    Requirements
                                </label>
                                <textarea
                                    id="requirements"
                                    name="requirements"
                                    rows="4"
                                    className="w-full p-4 border border-gray-300 rounded-md"
                                    placeholder="Describe your requirements"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md">
                                    Get Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="bg-white border-b"></section>


            {/* Contact Details Section */}
            <section className="lg:pl-32 container mx-auto px-6 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-800">Our Address</h3>
                        <p className="text-gray-700">539 W. Commerce St #4681 Dallas,</p>
                        <p className="text-gray-700">TX 75208</p>
                    </div>

                    {/* Email */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
                        <a
                            className="text-blue-600 hover:text-pink-500"
                            href="mailto:sales@collablinesolutions.com"
                        >
                            sales@collablinesolutions.com
                        </a>
                        <h3 className="text-gray-700">Phone:  +1 (469) 828-9408</h3>
                    </div>

                    {/* Working Hours */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
                        <p className="text-gray-700">Mon - Fri: 9:00 – 18:00</p>
                        <p className="text-gray-700">Sat - Sun: 11:00 – 17:00</p>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default Contact;
