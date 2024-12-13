// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQPage from './pages/FAQPage';
import About from './pages/About';
import Contact from './pages/Contact';
import HealthcareEmailList from './pages/HealthcareEmailList'
import ProfessionalEmailList from './pages/ProfessionalEmailList'
import TechnologyEmailList from './pages/TechnologyEmailList'
import IndustryEmailList from './pages/IndustryEmailList'
import InternationalEmailList from './pages/InternationalEmailList'
import B2BEmailList from './pages/B2BEmailList'
import ComingSoon from './pages/ComingSoon'
import DataAppending from './pages/DataAppending'
import B2BAppending from './pages/B2BAppending'
import DataCleansing from './pages/DataCleansing'
import DataLicensing from './pages/DataLicensing'
import PhoneAppending from './pages/PhoneAppending'
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
// import Services from './pages/Services';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/healthcare-email-list" element={<HealthcareEmailList />} />
        <Route path="/professional-email-list" element={<ProfessionalEmailList />} />
        <Route path="/technology-email-list" element={<TechnologyEmailList />} />
        <Route path="/industry-email-list" element={<IndustryEmailList />} />
        <Route path="/international-email-list" element={<InternationalEmailList />} />
        <Route path="/b2b-email-list" element={<B2BEmailList />} />
        <Route path="/data-appending-services" element={<DataAppending />} />
        <Route path="/b2b-email-appending-services" element={<B2BAppending />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/data-cleansing-services" element={<DataCleansing />} />
        <Route path="/data-licensing-services" element={<DataLicensing />} />
        <Route path="/phone-appending-services" element={<PhoneAppending />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
