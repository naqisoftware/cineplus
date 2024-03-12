import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './kdrama.css';

function TopRatedKdrama() {

    //useState to hold data
    const [topKdrama, setTopKdrama] = useState([])

    //Fetches local json file
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/data.json');
          setTopKdrama(response.data);
        } catch (error) {
          console.error(error.message);
        }
      };

      //Runs fetchData() function once
      useEffect(() =>{
        fetchData()
      },[]);

      // variable filteredKdrama will only data where the 
      // type is kdrama and has rating of equals to greater than 8.9
      const filteredKdrama = topKdrama.filter((e) => e.type === 'kdrama' && e.rating >= 8.9);


  return (
    
    //Displays the list as images with the title and rating at the bottom
    <div className="container">
        <h4 className="title">Top Rated Kdrama</h4>

        <div className="topKdrama">
        {filteredKdrama.map((e) => (
            <div key={e.id} className="kdrama-card">
            <img src={e.image} alt={e.title} className="image-list" />
            <div className="kdrama-info">
                <h5 className="kdrama-title">{e.title}</h5>
                <p className="kdrama-rating">Rating: {e.rating}</p>
            </div>
            </div>
        ))}
        </div>
  </div>


  )
}

export default TopRatedKdrama