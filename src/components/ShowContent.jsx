import React from 'react';
import './showContent.css';

function ShowContent({ e }) {
  return (

    //Contents of each backgound image. Some details displayed based on the image
    <div className={`content ${e.active ? 'active' : undefined}`}>
        <h1>{e.title}</h1>
        <h4>
            <span>{e.date}</span>
            <span>{`${e.numberOfSeasons} ${e.numberOfSeasons === 1 ? "Season" : "Seasons"}`}</span>
        </h4>
        <h4>
            <span>{e.genre.join(' ')}</span>
        </h4>
        <p>
          {e.description}
        </p>
        <div className="button">

        </div>
  </div>
  )
}

export default ShowContent