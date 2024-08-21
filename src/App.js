import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Proposal from './components/Proposal';
import Yes from './components/Yes';
import EnvelopeAnimation from './components/EnvelopeAnimation';
import PdfViewer from './components/PdfViewer';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root URL to /envelope */}
        <Route path="/" element={<Navigate to="/envelope" replace />} />
        
        <Route path="/envelope" element={<EnvelopeAnimation />} />
        <Route path="/proposals" element={<Proposal />} />
        <Route path="/yes" element={<Yes />} />
        {/* If you have a route for PdfViewer, add it here */}
        <Route path="/pdf-viewer" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
