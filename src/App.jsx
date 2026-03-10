import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Website Pages
import Home from './pages/Website/Home';
import About from './pages/Website/About';
import Services from './pages/Website/Services';
import Work from './pages/Website/Work';
import Client from './pages/Website/Client';
import Career from './pages/Website/Career';
import Contact from './pages/Website/Contact';
import Enquiry from './pages/Website/Enquiry';
import PrivacyPolicy from './pages/Website/PrivacyPolicy';
import TermsAndConditions from './pages/Website/TermsAndConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="our-work" element={<Work />} />
          <Route path="our-clients" element={<Client />} />
          <Route path="career" element={<Career />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
