import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../axios'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, getUrl, isLargeRow, Button, Button2}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    
    useEffect(()=>{
        async function getData(){
            const request = await axios.get(getUrl);
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        getData()
    },[getUrl])
// console.log(movies)

const opts = {
  height: "390",
  width: "100%",
  playerVars:{
    autoplay: 1,
  },
}

const handleClick = (movie) =>{
  if (trailerUrl) {
    setTrailerUrl("");
  }else{
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
    .then((url) => {
      const urlparams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlparams.get("v"));
    })
    .catch((error) => console.log(error))
  }
}
  return (
    <div className='Row' >
      <h2>{title}</h2>
      {/* <input type='button'>{isButton}</input> */}
      
      <div className='Row__Posters' >
        { movies.map((movie)=>(
            <img
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`Row__Poster ${isLargeRow && "Row__largeposter"}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alr={movie.name}
            />
        ))}
      </div>
      <div className='' >
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row
