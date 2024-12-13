import React from 'react';
import { useEffect } from 'react';
import why from "../assets/images/why.png";
import technology from "../assets/images/technology.png";
import healthcare from "../assets/images/healthcare.png";
import international from "../assets/images/international.png";
import industry from "../assets/images/industry.png";
import { Link } from 'react-router-dom';

const MarketingSection = () => {

  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((progressBar) => {
      const value = progressBar.getAttribute('data-value');
      progressBar.style.transition = 'width 1s ease-out';
      progressBar.style.width = `${value}%`;
    });
  }, []);


  return (
    <>
      {/* First Section */}
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
            TRANSFORMING YOUR BUSINESS WITH COMPREHENSIVE END-TO-END MARKETING AND SALES SOLUTIONS
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-white border-b py-8">
        <div className="flex flex-col w-full justify-center items-center text-center text-black">
          <p className="uppercase">
            Explore this catalogue to discover customized solution for your b2b marketing challenge
          </p>
        </div>

        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          {/* Card 1 */}
          <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link
              to="healthcare-email-list"
              className="flex flex-wrap items-center no-underline hover:no-underline">
                <img
                  src={healthcare}
                  alt="Card Image"
                  className="w-3/4 h-auto object-contain mx-auto rounded-t mb-4"
                />
                {/* <div className="w-full font-bold text-xl text-center text-gray-800 px-6"> */}
                <div className="w-full text-center font-bold text-xl px-6">
                  Healthcare
                </div>
                <p className="text-gray-800 text-center text-base px-6 mb-5">
                  Healthcare industry is growing at a tremendous rate, and the global healthcare spending is
                  expected to reach $8.7 trillion.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
              <Link to="/industry-email-list">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link
              to="technology-email-list"
              className="flex flex-wrap no-underline hover:no-underline">
                <img
                  src={technology}
                  alt="Card Image"
                  className="w-3/4 h-auto object-contain mx-auto rounded-t mb-4"
                />
                {/* <div className="w-full text-center font-bold text-xl text-gray-800 px-6"> */}
                <div className="w-full text-center font-bold text-xl px-6">
                  Technology
                </div>
                <p className="text-gray-800 text-center text-base px-6 mb-5">
                  Information Technology consumption is burgeoning at an astonishing rate. Concurrently, the
                  number of IT solutions.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
              <Link to="/technology-email-list">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link 
              to="/international-email-list"
              className="flex flex-wrap no-underline hover:no-underline">
                <img
                  src={international}
                  alt="Card Image"
                  className="w-3/4 h-auto object-contain mx-auto rounded-t mb-4"
                />
                <div className="w-full text-center font-bold text-xl px-6">
                  International
                </div>
                <p className="text-gray-800 text-center text-base px-6 mb-5">
                  You need to be absolutely certain that you are well-connected and have strategically placed
                  data partners across the world.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
              <Link to="/international-email-list">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link to="industry-email-list" className="flex flex-wrap no-underline hover:no-underline">
                <img
                  src={industry}
                  alt="Card Image"
                  className="w-3/4 h-auto text-center object-contain mx-auto rounded-t mb-4"
                />
                <div className="w-full text-center font-bold text-xl px-6">
                  Industry
                </div>
                <p className="text-gray-800 text-center text-base px-6 mb-5">
                  Financial Services, Aerospace/ Aviation Industry, Construction, Educational govt and
                  private, Manufacturing, Chemical.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <Link to="/industry-email-list">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <div className="">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Column with Image */}
          <div className="pt-16 flex w-full md:w-2/5 justify-center items-center text-center md:text-left">
            <img className="w-full md:w-4/5 hidden sm:block" src={why} alt="Hero Image" />
          </div>

          {/* Right Column with Title and Cards */}
          <div className="flex w-full md:w-3/5 py-6 justify-center items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-center mb-6">WHY CHOOSE US?</h2>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2grid lg:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="uppercase text-xl sm:text-lg md:text-base font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d53369] to-[#daae51]">
                    For Sales Team
                  </h3>
                  <p className="text-gray-600">
                    Give practical insights to your sales teams with our B2B marketing data and connect with qualified professionals.
                  </p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md">
                  <h3 className="uppercase text-xl sm:text-lg md:text-base font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d53369] to-[#daae51]">
                    For Marketing Managers
                  </h3>
                  <p className="text-gray-600">
                    Marketing Managers can use our data to roll out compelling marketing campaigns to drive engagement and conversations.
                  </p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md">
                  <h3 className="uppercase text-xl sm:text-lg md:text-base font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d53369] to-[#daae51]">
                    For Recruiters
                  </h3>
                  <p className="text-gray-600">
                    Our multichannel B2B prospect data helps recruiters reach qualified specialists from various domains.
                  </p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md">
                  <h3 className="uppercase text-xl sm:text-lg md:text-base font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d53369] to-[#daae51]">
                    For Business Builders
                  </h3>
                  <p className="text-gray-600">
                    As a Business Builder, you can use our data to expand your market reach, explore new opportunities, and scale your business.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* New Section with Progress Bars */}
      <div className="pt-16 pb-16 bg-white container px-3 mx-auto mt-12">
        <h2 className="text-black uppercase text-3xl font-bold text-center mb-4">
          Driving Marketing Excellence
        </h2>
        <p className="text-gray-600 text-center mb-8">
          At Hillborn Solutions, we aim to empower businesses with precise and complete contact data of their
          most valuable prospects. The highlights of B2B mailing data that we offer are:
        </p>

        <div className="space-y-6 w-full max-w-2xl mx-auto">
          {/* Progress Bar 1 */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-black text-lg font-semibold">Data Authenticity</h3>
            <span className="text-black text-sm font-medium progress-value">100%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full progress-bar"
              style={{
                // background: 'linear-gradient(90deg, #d53369 40%, #daae51 60%)',
                background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
                width: '0%', // Start width at 0% for animation
              }}
              data-value="100"
            ></div>
          </div>

          {/* Progress Bar 2 */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-black text-lg font-semibold">Data Accuracy</h3>
            <span className="text-black text-sm font-medium progress-value">95%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full progress-bar"
              style={{
                // background: 'linear-gradient(90deg, black 40%, rgba(14, 13, 13, 0.7) 60%)',
                // background: 'linear-gradient(90deg, #d53369 40%, #daae51 60%)',
                background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
                width: '0%', // Start width at 0% for animation
              }}
              data-value="95"
            ></div>
          </div>

          {/* Progress Bar 3 */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-black text-lg font-semibold">Email Deliverability</h3>
            <span className="text-black text-sm font-medium progress-value">90%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full progress-bar"
              style={{
                // background: 'linear-gradient(90deg, black 40%, rgba(14, 13, 13, 0.7) 60%)',
                // background: 'linear-gradient(90deg, #d53369 35%, #daae51 65%)',
                background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
                width: '0%', // Start width at 0% for animation
              }}
              data-value="90"
            ></div>
          </div>
        </div>

        <section className="bg-white border-b py-8"></section>
      </div>
    </>
  );
};

export default MarketingSection;
