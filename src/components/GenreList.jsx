import React from 'react'
import './genreList.css';
import { useState } from 'react';

function GenreList({e}) {

    const [isMouseOver, setIsMouseOver] = useState(false);

    //If value of trailer exist then open it in a new window
    const handlePlayClickTrailer = () => {
        if (e.trailer) {
          window.open(e.trailer, '_blank');
        }
      };

      //Displays the title of the image
      const handleTitle = () => {
        return isMouseOver ? (
          <div className="title-overlay">
            <p className="title-text">{e.title}</p>
          </div>
        ) : null;
      };



  return (
    <div className="col-lg-2 col-md-4 col-sm-6"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
    >
        <div className="genre-card">
            <img src={e.image} 
                 alt="image" 
                 className="image-list" 
                 onClick={handlePlayClickTrailer} 
            />
        </div>
        <div className="content">
        {handleTitle()}

        </div>
    </div>
  )
}

export default GenreList