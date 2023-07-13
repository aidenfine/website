import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { HdContractingPage } from './pages/projects/hdContracting/HdContractingPage';
import { PendoPage } from './pages/projects/pendo/PendoPage';
import { StreametricV2 } from './pages/projects/streametricV2/StreametricV2';
import { Profile } from './pages/profile/Profile';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-hdcontracting" element={<HdContractingPage />} />
          <Route path="/project-pendoDashboard" element={<PendoPage />} />
          <Route path="/project-streametricv2" element={<StreametricV2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
