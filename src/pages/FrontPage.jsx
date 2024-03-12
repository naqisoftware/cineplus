import React from 'react';
import './frontPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowContent from '../components/ShowContent';
import PlayButton from '../components/PlayButton';
import ImageSwiper from '../components/ImageSwiper';



function FrontPage() {
  const [animeKdrama, setAnimeKdrama] = useState([]);

  //Fetching in-house json file
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data.json');
      setAnimeKdrama(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  //Runs fetchData() function once
  useEffect(() =>{
    fetchData()
  },[]);

  //If id param "id" equals to id value in animeKdrama then set the value if "active" to true
  const handleNextClick = id => {
    const newAnimeKdrama = animeKdrama.map(e => {
      e.active = false;
      if(e._id === id) {
        e.active = true;
      }
      return e;
    });
    setAnimeKdrama(newAnimeKdrama)
  };




  return (
    <div className="banner">
      {/* To only display Images with value of "active" equals to true */}
      { animeKdrama && animeKdrama.length > 0 && animeKdrama.map(e => (
          <div key={e._id} className="animekdrama">
          <img 
               src={process.env.PUBLIC_URL + '/' + e.image}
               alt="Background Img" 
               className={`image ${e.active ? 'active' : undefined}`} 
          />

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                {/* contents on the images */}
                <ShowContent e={e} />
              </div>
              <div className="col-lg-6 col-md-12">
                {/* Play button */}
                <PlayButton e={e} /> 

              </div>
            </div>
          </div>
        </div>
        ))
      }
      {/* Image swiper */}
      {animeKdrama && animeKdrama.length > 0 && <ImageSwiper slides={animeKdrama} slideChange={handleNextClick} />}
      

    </div>
  )
}

export default FrontPage







