import React, { useState } from 'react';
import './Proposal.css';
import sadcatImage from '../assets/sadcat.jpeg'; // Import your images
import sadcatImage2 from '../assets/sad-man-tik-tok-meme.gif'; // Import additional images
import sadcatImage3 from '../assets/milk-and-mocha.gif'; // Import additional images
import newImage1 from '../assets/crykilig.jpeg'; // Import new images
import newImage2 from '../assets/disappointed.jpeg'; // Import new images
import newImage3 from '../assets/frog.jpeg'; // Import new images
import newImage4 from '../assets/kiligsss.jpeg'; // Import new images
import newImage5 from '../assets/sad-guy-crying-guy.gif'; // Import new images
import newImage6 from '../assets/sadsad.jpeg'; // Import new images
import newImage7 from '../assets/disappointed.jpeg'; // Import new images
import { Link } from 'react-router-dom';

const Proposal = () => {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [imageIndex, setImageIndex] = useState(-1); // Initialize with -1 to indicate no image
  const [buttonPosition, setButtonPosition] = useState(0); // Track position index

  // Array of button positions
  const positions = [
    { bottom: '20px', left: '20px' },
    { bottom: '20px', left: '120px' },
    { bottom: '20px', left: '220px' },
    { bottom: '20px', left: '320px' }
  ];

  // Array of images
  const images = [
    sadcatImage,
    sadcatImage2,
    sadcatImage3,
    newImage1,
    newImage2,
    newImage3,
    newImage4,
    newImage5,
    newImage6,
    newImage7,
    // Add more images here if needed
  ];

  const handleButtonClick = () => {
    // Calculate new image index and button position
    const newImageIndex = (imageIndex + 1) % images.length;
    const newPosition = (buttonPosition + 1) % positions.length;

    setButtonOpacity(0.5); // Change opacity
    setImageIndex(newImageIndex); // Update image index
    setButtonPosition(newPosition); // Update button position
  };

  return (
    <div className="proposal">
      <div className="ask">
        <p>
          <span className="crush">HI CRUSH</span> <br />
          I like you a lot, wanna go on a date?
        </p>
        <div className="buttons">
          <Link to="/yes">
            <button className="yes-button">Yes</button>
          </Link>
          <button
            className={`no-button position-${buttonPosition}`} // Dynamically apply position class
            style={{ opacity: buttonOpacity, ...positions[buttonPosition] }} // Apply opacity and position
            onClick={handleButtonClick}
          >
            NO
          </button>
        </div>
        {imageIndex !== -1 && (
          <img
            className={`image-${imageIndex}`}
            src={images[imageIndex]} // Use the current image based on index
            alt="Sad"
          />
        )}
      </div>
    </div>
  );
};

export default Proposal;
