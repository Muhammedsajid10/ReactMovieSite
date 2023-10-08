import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY, IMAGE_URL } from '../Constants/Contstants'
import axios from 'axios'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      const randomIndex = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[randomIndex])
     
    })
  }, [])
  
  return (
    
    <div style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ' '})`}}
    className='banner'>
        <div className="content">
          <div className="title">{movie ? movie.title : " "}</div>       {/*ivide ternaryopt kodkunnath , ee return ullile code oru pravisham render ayaale "useEffect" work avullu , appo ivide verum {movie.title} enn vilichal work avuula, karanam useEffect nte ullilan "setMovie" update cheyyunath , appo condtion kodukathe chaythal "movie" nte value null ayirikkum, appo error verum. */}
          <div className="bannerButton">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="desctiption">{movie ? movie.overview : " "}</h1>
        </div>
        <div className="fadeBotton"></div>
    </div>
  )
}

export default Banner