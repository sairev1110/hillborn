// pages/FAQPage.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  const faqData = [
    {
      question: "WHAT MAKES Hillborn Solutions AS THE BEST CHOICE FOR A DATA SOLUTION PROVIDER?",
      answer: "At Hillborn Solutions, we have a dedicated team of data experts help in supplying the best b2b email lists that are data-driven and result-driven. In addition to that, our team of data experts analyze the b2b market space to find all the contact information of qualified prospects and assimilates the data followed by certain validation practices."
    },
    {
      question: "HOW IS YOUR DATA COMPILED?",
      answer: `As a trusted B2B marketing database provider, we at Hillborn Solutions continuously gather, analyze, and manage in-house data from a variety of licensed data sources, including public records, DBA filings, annual reports, association membership data, yellow pages, webinar registrations, SEC filings, surveys, and more.

Note: While compiling B2B email databases, we follow strict measures and adhere to various industry rules and regulations to ensure compliance and data accuracy.`
    },
    {
      question: "WHAT ARE THE DIFFERENT DATA SERVICES THAT YOU OFFER?",
      answer: "We offer data services including B2B mailing lists, lead generation, data cleansing, and customer profiling."
    },
    {
      question: "WHAT ARE THE DIFFERENT MAILING LISTS THAT YOU OFFER?",
      answer: "We provide industry-specific, geographically targeted, and personalized B2B mailing lists to suit your marketing goals."
    },
    {
      question: "HOW FREQUENTLY IS YOUR DATABASE UPDATED?",
      answer: "Our database is updated quarterly to maintain high deliverability and accuracy."
    },
    {
      question: "HOW CAN I GET B2B MAILING LISTS FROM Hillborn Solutions?",
      answer: "You can contact our sales team or visit our website to request customized B2B mailing lists."
    },
    {
      question: "WHAT ARE THE VARIOUS DATA RECORDS THAT I CAN FETCH FROM YOUR DATABASE?",
      answer: "Our database includes contact information, company profiles, industry details, and more."
    },
    {
      question: "IS YOUR DATABASE COMPLIANT WITH GDPR & UCPA LAW?",
      answer: "Yes, our database complies with GDPR and UCPA regulations, ensuring data privacy and security."
    },
    {
      question: "IN WHICH FORMAT CAN I GET EMAIL LISTS?",
      answer: "Email lists are available in formats like CSV, Excel, and PDF for easy integration with your systems."
    },
    {
      question: "HOW DO YOUR B2B MAILING LISTS BOOST LEAD GENERATION?",
      answer: "Our targeted B2B mailing lists help you connect with potential clients, improving engagement and conversion rates."
    },
    {
      question: "HOW MUCH DELIVERABILITY RATE CAN I EXPECT FROM YOUR DATABASE?",
      answer: "Our database offers a deliverability rate of over 95%, ensuring your messages reach the intended audience."
    },
    {
      question: "WHAT ARE THE BENEFITS OF PURCHASING B2B MAILING LISTS FROM Hillborn Solutions?",
      answer: "Benefits include high-quality leads, increased ROI, and enhanced marketing efficiency."
    },
    {
      question: "CAN I GET PERSONALIZED B2B EMAIL LISTS?",
      answer: "Yes, we provide personalized mailing lists tailored to your target audience and business requirements."
    },
    {
      question: "WHO ARE THE IDEAL AUDIENCE FOR YOUR B2B MAILING LISTS?",
      answer: "Our B2B mailing lists are ideal for businesses targeting decision-makers, managers, and industry professionals."
    },
    {
      question: "ARE B2B MAILING LISTS REALLY HELPFUL FOR MARKETING?",
      answer: "Absolutely, B2B mailing lists enhance your outreach, improve lead generation, and drive better marketing results."
    }
  ];

  return (
    <div>
      <Navbar />
      <HeroSection heading="FAQ" subheading='FREQUENTLY ASKED QUESTIONS...' showButton={false} />
      <section className="max-w-4xl mx-auto p-6">
        <FAQ faqData={faqData} />
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
