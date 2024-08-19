// Yes.js
import React from 'react';
import './Yes.css'; // Ensure this CSS file contains the styles provided

// Import images and audio
import kiligImage from '../assets/kiligsss.jpeg';
import packiligImage from '../assets/packilig.jpeg';
import crykiligImage from '../assets/crykilig.jpeg';
import kinikiligAudio from '../assets/Kinikilig.mp3';

const Yes = () => {
  return (
    <div className="yes">
      <div className="sparkle"></div>
      <img src={kiligImage} alt="Kilig" className="romantic-img" />
      <img src={packiligImage} alt="Packilig" className="romantic-img" />
      <p className="message">Ping me on my whatsApp plssss 9539179517 &lt;3</p>
      <p className="message">Welcome my honey bunch sugar plum loml i love you &lt;3</p>
      <audio controls autoPlay src={kinikiligAudio} className="audio-player" />
      <img src={crykiligImage} alt="Crykilig" className="romantic-img" />
      <div className="heart heart1"></div>
      <div className="heart heart2"></div>
      <div className="heart heart3"></div>
      <div className="heart heart4"></div>
      <div className="heart heart5"></div>
    </div>
  );
};

export default Yes;
