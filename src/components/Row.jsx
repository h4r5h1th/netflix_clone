import React, { useEffect, useState } from 'react'
import axios from "./axios";
import './Row.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Row({title, fetchUrl, id}) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl])
    function scrollright(){
        var left = document.querySelector('.'+id)
        left.scrollBy(370, 0)
    }
    function scrollleft(){
        var right = document.querySelector('.'+id)
        right.scrollBy(-370, 0)
    }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_poster_parent'>
        <button className='leftSlideButton' onClick={scrollleft}><ArrowBackIosNewIcon style={{ color: "white" }}/></button>
        <button className='rightSlideButton' onClick={scrollright}><ArrowForwardIosIcon style={{ color: "white" }}/></button>
        <div className={`row__posters ${id}`}>
        {movies.map(movie =>(
            (movie.poster_path)&&(
                <img
            className="row__poster"
            key = {movie.id}
             src={`${base_url}${movie.poster_path}`} alt=""/>
            )
        ))}
        </div> 
        </div>
    </div>
  )
}

export default Row