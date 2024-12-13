import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-8">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="bg-gradient-to-r from-[#d53369] to-[#daae51] bg-clip-text text-transparent no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex-1 mb-6">
            <a
              className="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              Hillborn Solutions
            </a>
          </div>


          {/* Information Section */}
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Information</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/privacy-policy"
                  className="no-underline hover:underline text-gray-800 decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/faq"
                  className="no-underline hover:underline text-gray-800 decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Services</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/technology-email-list"
                  className="no-underline hover:underline text-gray-800 decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">
                  Technology
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/healthcare-email-list"
                  className="no-underline hover:underline text-gray-800 decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">
                  Healthcare
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/industry-email-list"
                  className="no-underline hover:underline text-gray-800 decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">
                  Industry
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/international-email-list"
                  className="no-underline hover:underline text-gray-800 decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]">
                  International
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Address</p>
            <address className="no-underline text-gray-800">
              <p>539 W. Commerce St #4681 Dallas</p>
              <p>TX 75208</p>
              <p>
                Email:{' '}
                <a
                  className="hover:underline decoration-[#d53369] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                  href="mailto:sales@collablinesolutions.com"
                >
                  sales@collablinesolutions.com
                </a>
              </p>
              <p>Phone: +1 (469) 828-9408</p>
            </address>
          </div>
        </div>

        <section className="bg-white border-b py-4"></section>

        {/* Footer Bottom Section */}
        <div className="flex flex-col w-full justify-center items-center text-center text-black">
          <div className="h-auto w-full text-center text-black bg-white opacity-100 my-0 py-1 rounded-t">
            <p className="text-lg">
              © Copyrights 2023 Collabline Data Solutions
            </p>
            <p className="font-medium text-md">
              Powered by Hillborn Technologies Private Limited
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 pb-2 mt-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
