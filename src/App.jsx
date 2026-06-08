import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Membership from './pages/Membership.jsx';
import MemberProfile from './pages/MemberProfile.jsx';
import MemberNgos from './pages/MemberNgos.jsx';
import Partners from './pages/Partners.jsx';
import Projects from './pages/Projects.jsx';
import WhatWeDo from './pages/WhatWeDo.jsx';
import { Route, Routes } from './router.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/member-ngos" element={<MemberNgos />} />
          <Route path="/member-ngos/apedo" element={<MemberProfile memberId="apedo" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
