import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const targetDate = new Date('2024-12-01T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <>
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#d53369] to-[#daae51] text-white text-center px-4 sm:px-6 lg:px-12 py-8">

        <div className="max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Something Amazing Is Coming Soon!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            We are working hard to bring you something great. Stay tuned for updates!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
              <div key={index} className="bg-white text-gray-800 p-3 sm:p-4 rounded-xl shadow-lg w-20 sm:w-24 md:w-28">
                <p className="text-2xl sm:text-3xl font-bold">
                  {timeLeft[unit.toLowerCase()] || 0}
                </p>
                <p className="text-sm sm:text-base">{unit}</p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-lg mb-4">
            Be the first to know when we launch! Subscribe to our newsletter for updates.
          </p>

          <a
            href="mailto:example@example.com"
            className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg font-semibold transition duration-300 ease-in-out"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
