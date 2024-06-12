import React, { useState } from 'react';

const PagodeQuestion = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoButtonHover = () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesButtonClick = () => {
    window.location.href = 'https://example.com'; // Replace with your desired link
  };

  return (
    <div>
      <h1>Você gosta de pagode?</h1>
      <button onClick={handleYesButtonClick}>Yes</button>
      <button
        onMouseOver={handleNoButtonHover}
        style={{ position: 'absolute', top: noButtonPosition.y, left: noButtonPosition.x }}
      >
        No
      </button>
    </div>
  );
};

export default PagodeQuestion;