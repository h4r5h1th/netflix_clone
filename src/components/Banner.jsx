import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData()
    },[])

    console.log(movie)

    function shortend(string, n){
        return string?.length > n? string.substr(0, n-1) + '.....': string;
    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        }}>
        <div className='bannner__content'>
            <h1 className='bannner__title'>
               {movie?.name || movie?.title || movie?.orginal_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>{shortend(`${movie?.overview}`, 180)}</h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner