import React from 'react';
import { useState, useEffect } from 'react';
import './genre.css';
import axios from 'axios';
import GenreList from '../components/GenreList';

function Genre() {

    //Array containing single object which has three properties
    const filterGenre = [
      {
        _id:1,
        name: 'All',
        active: true,
      },
      {
        _id:2,
        name: 'Romance',
        active: false,
      },
      {
        _id:3,
        name: 'Action',
        active: false,
      },
      {
        _id:4,
        name: 'Thriller',
        active: false,
      },
      {
        _id:5,
        name: 'Horror',
        active: false,
      },
      {
        _id:6,
        name: 'Adventure',
        active: false,
      },
      {
        _id:7,
        name: 'Drama',
        active: false,
      },
      {
        _id:8,
        name: 'Mecha',
        active: false,
      },
      {
        _id:9,
        name: 'Psychological',
        active: false,
      },
      {
        _id:10,
        name: 'Comedy',
        active: false,
      },
      {
        _id:11,
        name: 'Adventure',
        active: false,
      },
      {
        _id:12,
        name: 'Superhero',
        active: false,
      },
      {
        _id:13,
        name: 'School',
        active: false,
      },
      {
        _id:14,
        name: 'Crime',
        active: false,
      },
      {
        _id:15,
        name: 'Mystery',
        active: false,
      },
      {
        _id:16,
        name: 'Supernatural',
        active: false,
      },
      {
        _id:17,
        name: 'Historical',
        active: false,
      },
      {
        _id:18,
        name: 'Sci-Fi',
        active: false,
      },
      {
        _id:19,
        name: 'Space',
        active: false,
      },
      {
        _id:20,
        name: 'Fantasy',
        active: false,
      },
      {
        _id:21,
        name: 'Military',
        active: false,
      },
      {
        _id:22,
        name: 'Ninja',
        active: false,
      },
      {
        _id:23,
        name: 'Sports',
        active: false,
      },
      {
        _id:24,
        name: 'medical',
        active: false,
      },
    ]

    //useStates
    const [originalData, setOriginalData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [genreFilter, setGenreFilter] = useState(filterGenre)

    //fetching the local json file
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data.json');
        setOriginalData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    //Runs fetchData() function once
    useEffect(() =>{
      fetchData()
    },[]);
    //Runs fetchData() function for the new useState with new data
    useEffect(() => {
      setNewData(originalData);
    }, [originalData]);

    //Lists out the list of the data from original useState if the selected
    //genre is equals to "All"
    const handleGenreList = (selectedGenre) => {
      if (selectedGenre === 'All') {
        setNewData(originalData);
        return;
      }

      //Returns the property active to true if the name of the name
      //property is requals to the selected genre
      setGenreFilter(genreFilter.map(e => {
        e.active = false;
        if(e.name === selectedGenre) {
          e.active = true
        }
        return e;
      }))
      
      //Filters the originalData to check if the propery genre equals to
      //the selected genre.
      const newFilteredList = originalData.filter((e) =>
        e.genre.some((genre) => genre.toLowerCase() === selectedGenre.toLowerCase())
      );
      setNewData(newFilteredList);
    };


  return (
    //Lists out genres.
    <section id="genre" className="genre">
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">List of genres</h4>
            </div>
            <div className="row">
                {
                  <ul className='filteringGenre'>
                    {
                      genreFilter.map(list => (
                        <li 
                          key={list._id}
                          className={`${list.active ? 'active': undefined}`}
                          onClick={() => {handleGenreList(list.name)}}
                        >
                          {list.name}
                        </li> 
                      ))
                    }
                  </ul>
                }
           
            </div>
            <div className="row mt-5">
              {newData && newData.length > 0 && newData.map(e => (
                <GenreList key={e._id} e={e}/>
              )) }
            </div>
        </div>
    </section>
  )
}

export default Genre