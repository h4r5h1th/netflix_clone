import React from 'react'
import './Homescreen.css'
import Navbar from './Navbar'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'

function Homescreen() {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
        <Row 
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          id =  'one'
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          id =  'two'
        />
        <Row 
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          id =  'three'
        />
        <Row 
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          id =  'four'
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          id =  'five'
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          id =  'six'
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          id =  'seven'
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          id =  'eight'
        />
    </div>
  )
}

export default Homescreen