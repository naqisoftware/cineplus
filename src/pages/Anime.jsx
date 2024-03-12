import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './anime.css';

function TopRatedAnime() {
    
    const [topAnime, setTopAnime] = useState([])
    //fetching the local json file
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/data.json');
          setTopAnime(response.data);
        } catch (error) {
          console.error(error.message);
        }
      };
      //Runs fetchData() function once
      useEffect(() =>{
        fetchData()
      },[]);

      // variable filteredAnime will only data where the 
      // type is anime and has rating of equals to greater than 9
      const filteredAnime = topAnime.filter((e) => e.type === 'anime' && e.rating >= 9);



  return (
    <div className="container">
    <h4 className="title">Top Rated Anime</h4>
    
    {/* Displays the list as images with the title and rating at the bottom */}
    <div className="topAnime">
      {filteredAnime.map((e) => (
        <div key={e.id} className="anime-card">
          <img src={e.image} alt={e.title} className="image-list" />
          <div className="anime-info">
            <h5 className="anime-title">{e.title}</h5>
            <p className="anime-rating">Rating: {e.rating}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

    

  )
}

export default TopRatedAnime