import React, { useCallback } from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import PrivacyPolicy from './pages/privacypolicy';
import TermsOfUse from './pages/terms-of-use';

function App() {


    return (
        <Router>
            <Analytics />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
            </Routes>

        </Router>
    );
}

export default App;
