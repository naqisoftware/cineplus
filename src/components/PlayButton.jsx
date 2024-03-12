import React from 'react';
import './playButton.css';

function PlayButton({ e }) {

  //If value of trailer exist then open it in a new window
  const handlePlayClick = () => {
    if (e.trailer) {
      window.open(e.trailer, '_blank');
    }
  };

  //Added a button to open the trailer in a new window
  return (
    <div className={`trailer ${e.active ? 'active' : undefined}`}>
      <button className="playBtn" onClick={handlePlayClick}>
        <ion-icon name="play-circle"></ion-icon>
      </button>
    </div>
  );
}

export default PlayButton;

