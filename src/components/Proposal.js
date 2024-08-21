import React, { useState } from 'react';
import './Proposal.css';
import sadcatImage from '../assets/sadcat.jpeg'; // Import your images
import sadcatImage2 from '../assets/sad-man-tik-tok-meme.gif'; // Import additional images
import sadcatImage3 from '../assets/milk-and-mocha.gif'; // Import additional images
import newImage1 from '../assets/crykilig.jpeg'; // Import new images
import newImage2 from '../assets/hang.jpeg'; // Import new images
import newImage7 from '../assets/sad-guy-crying-guy.gif'; // Import new images
import { Link } from 'react-router-dom';

const Proposal = () => {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [imageIndex, setImageIndex] = useState(-1); // Initialize with -1 to indicate no image
  const [buttonPosition, setButtonPosition] = useState(0); // Track position index
  const [noClickCount, setNoClickCount] = useState(0); // Track the number of "No" clicks
  const [backgroundText, setBackgroundText] = useState('I like you a lot, wanna go on a date?'); // Background text
  const [showYesButtons, setShowYesButtons] = useState(false); // Track when to show "Yes" buttons
  const [hearts, setHearts] = useState([]); // Track hearts for animation

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
    newImage7,
  ];

  // Array of background texts
  const backgroundTexts = [
    'dont do it!!!',
    'please',
    'come on, pretty please?',
    'you know you want to say yes!',
    'PLEEEAAAAAASEEEEE!',
    'SATH POTTE!!!!!!',
    'YES il Njekkkkkk!!!!!'
  ];

  // Array of "Yes" phrases
  const yesPhrases = [
    'Yes',
    'Of course, yes!',
    'A little bit, yes',
    'Definitely yes',
    'Why not, yes!',
    'Absolutely yes!',
    'Sure, yes!',
    'Yup, yes!',
    'Totally yes!',
    'Without a doubt, yes!',
  ];

  const handleButtonClick = () => {
    const newImageIndex = imageIndex + 1;

    // If all images have been displayed, show "Yes" buttons
    if (newImageIndex >= images.length) {
      setShowYesButtons(true);
    } else {
      const newPosition = (buttonPosition + 1) % positions.length;
      const newNoClickCount = (noClickCount + 1) % backgroundTexts.length;

      setButtonOpacity(0.5); // Change opacity
      setImageIndex(newImageIndex); // Update image index
      setButtonPosition(newPosition); // Update button position
      setNoClickCount(newNoClickCount); // Update click count
      setBackgroundText(backgroundTexts[newNoClickCount]); // Update background text

      // Create a heart element and add it to the array
      const newHeart = (
        <span
          key={Date.now()}
          className="heart"
          style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 2 + 1}s` }}
        >
          ❤️
        </span>
      );
      setHearts((prevHearts) => [...prevHearts, newHeart]);

      // Remove hearts after animation ends
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.slice(1));
      }, 2000);
    }
  };

  if (showYesButtons) {
    return (
      <div className="yes-buttons-container">
        {[...Array(100)].map((_, index) => (
          <Link to="/yes" key={index}>
            <button className="yes-button">
              {yesPhrases[Math.floor(Math.random() * yesPhrases.length)]}
            </button>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="proposal">
      <div className="ask">
        <p>
          <span className="crush">HEY SEETHAAA!</span> <br />
          {backgroundText}
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
      {hearts}
    </div>
  );
};

export default Proposal;
