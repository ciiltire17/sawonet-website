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
import Publications from './pages/Publications.jsx';
import PublicationDetail from './pages/PublicationDetail.jsx';
import PublicationSeo from './components/PublicationSeo.jsx';
import { publications } from './data/publications.js';
import { Route, Routes } from './router.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <PublicationSeo />
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
          <Route path="/publications" element={<Publications />} />
          {publications.map((publication) => <Route key={publication.slug} path={publication.path} element={<PublicationDetail publication={publication} />} />)}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
