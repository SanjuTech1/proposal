import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnvelopeAnimation.css';
import pdfFile from '../assets/a.pdf'; // Import the PDF file

const EnvelopeAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const openEnvelope = () => setIsOpen(true);
    const closeEnvelope = () => setIsOpen(false);
    const goToProposal = () => navigate('/proposal');

    // Function to open the local PDF
    const readPdf = () => {
        window.open(pdfFile, '_blank'); // Open the PDF in a new tab
    };

    return (
        <div>
            <div className={`envlope-wrapper ${isOpen ? 'open' : 'close'}`}>
                <div id="envelope" className={isOpen ? 'open' : 'close'}>
                    <div className="front flap"></div>
                    <div className="front pocket"></div>
                    <div className="letter">
                        <div className="words line1"></div>
                        <div className="words line2">Happy Birthday..! </div>
                        <div className="words line3"> <center> <b> Seetha Mahalakshmi! </b> </center> </div>
                        <div className="words line4"></div>
                    </div>
                    <div className="hearts">
                        <div className="heart a1"></div>
                        <div className="heart a2"></div>
                        <div className="heart a3"></div>
                    </div>
                </div>
            </div>
            <div className="reset">
                <button onClick={openEnvelope}>Open</button>
               
                <button onClick={readPdf}>clicke here after opening the letter !!!!!</button>
                <button className="navbar-button" onClick={goToProposal}> I need to ask you Something !!</button>
            </div>
        </div>
    );
};

export default EnvelopeAnimation;
