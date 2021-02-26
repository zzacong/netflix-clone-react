import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import axios from '../axios'
import './css/Row.css'

export default function Row({ title, url, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(url)
      console.log(data)
      setMovies(data.results)
      return data
    }
    getData()
  }, [url])

  // console.table(movies)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = async movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      try {
        const url = await movieTrailer(
          movie?.original_name || movie?.title || movie?.name || ''
        )
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters ${isLargeRow && 'row_large'}`}>
        {movies.map(movie => {
          return (
            <img
              className="row_poster"
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${imageBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          )
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
