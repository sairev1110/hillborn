import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white"
      style={{
        // background: "linear-gradient(90deg, black 0%, rgba(14, 13, 13, 0.7) 100%)",
        background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)'
      }}

    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            to="/"
            className="text-white font-bold text-2xl lg:text-4xl flex items-center"
          >
            <img src={logo} alt="Logo" className="h-12 inline" />
            <span className="ml-2 text-sm sm:text-lg lg:text-xl hidden sm:inline">Hillborn Solutions</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-white hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {/* Company */}
            <li className="relative group mr-3">
              <a
                href="#"
                // daae51
                className="py-2 px-2 font-bold text-white bg-transparent hover:bg-white hover:text-[#d53369] rounded transition">
                Company
              </a>
              <div className="absolute lg:mt-8 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-auto min-w-[200px] dark:bg-gray-700 group-hover:block lg:absolute lg:top-0 lg:left-0 lg:w-[200px] group-hover:block lg:group-hover:block z-30">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/about"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Solutions */}
            <li className="relative group mr-3">
              <a
                href="#"
                className="py-2 px-2 font-bold text-white bg-transparent hover:bg-white hover:text-[#d53369] rounded transition"
              >
                Solutions
              </a>
              <div className="lg:mt-8 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-auto min-w-[200px] dark:bg-gray-700 group-hover:block lg:absolute lg:top-0 lg:left-0 lg:w-[200px] group-hover:block lg:group-hover:block z-30">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/healthcare-email-list"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      HealthCare Email List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/professional-email-list"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Professional Email List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/technology-email-list"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Technology User Email List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/industry-email-list"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Industry Email List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/international-email-list"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      International Email List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/b2b-email-list"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      B2B Email Marketing List
                    </Link>
                  </li>
                  {/* Other Solution Items */}
                </ul>
              </div>
            </li>

            {/* Services */}
            <li className="relative group mr-3">
              <a
                href="#"
                className="py-2 px-2 font-bold text-white bg-transparent hover:bg-white hover:text-[#d53369] rounded transition"
              >
                Services
              </a>
              <div className="lg:mt-8 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-auto min-w-[200px] dark:bg-gray-700 group-hover:block lg:absolute lg:top-0 lg:left-0 lg:w-[200px] group-hover:block lg:group-hover:block z-30">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/data-appending-services"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Data Appending Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/b2b-email-appending-services"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      B2B Email Appending Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/data-cleansing-services"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Data Cleansing Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/data-licensing-services"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Data Licensing Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/phone-appending-services"
                      className="block px-2 py-2 dark:hover:text-white whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d53369] hover:to-[#daae51]"
                    >
                      Phone Appending Services
                    </Link>
                  </li>
                  {/* Other Service Items */}
                </ul>
              </div>
            </li>

            {/* Contact Us */}
            <li className="relative group mr-3">
              <Link
                to="/contact"
                className="py-2 px-2 font-bold text-white bg-transparent hover:bg-white hover:text-[#d53369] rounded transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
