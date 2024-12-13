// components/FAQ.js
import { useState } from 'react';

const FAQ = ({ faqData }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      {faqData.map((faq, index) => (
        <div className="faq-item border-b" key={index}>
          <div
            className="flex items-center justify-between py-4 px-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-semibold sm:text-base text-sm">{faq.question}</h3>
            <span className="text-xl">{expanded === index ? '-' : '+'}</span>
          </div>
          {expanded === index && (
            <div className="px-6 pb-4">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
