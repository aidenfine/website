import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { HdContractingPage } from './pages/projects/hdContracting/HdContractingPage';
import { PendoPage } from './pages/projects/pendo/PendoPage';
import { StreametricV2 } from './pages/projects/streametricV2/StreametricV2';
import { Profile } from './pages/profile/Profile';
import { Contact } from './pages/Contact/Contact';
import { Blog } from './pages/blog/Blog';
import { WrittingOne } from './pages/blog/Writing/WritingOne';
import ScrollToTop from './helpers/ScrollToTop';
import { NotFound } from './pages/not-found-404/NotFound';
import { Analytics } from '@vercel/analytics/react';
import { ReducingServerLoadBlog } from './pages/blog/Writing/ReducingServerLoadBlog';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Analytics />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project-hdcontracting" element={<HdContractingPage />} />
          <Route path="/project-pendoDashboard" element={<PendoPage />} />
          <Route path="/project-streametricv2" element={<StreametricV2 />} />
          <Route path="/blog/how-to-succeed-in-internship" element={<WrittingOne />} />
          {/* <Route path="/blog/the-future-of-ai" element={<WrittingThree />} /> */}
          <Route path="/blog/reducing-server-load" element={<ReducingServerLoadBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
