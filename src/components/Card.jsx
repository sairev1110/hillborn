import React from 'react';

const Card = ({ Icon, heading, subheading }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center max-w-sm mx-auto">
      <div className="text-4xl text-blue-500 mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{heading}</h3>
      <p className="text-gray-600 text-center">{subheading}</p>
    </div>
  );
};

export default Card;
