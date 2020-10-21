import React, { useEffect, useState } from 'react'

import './css/Banner.css'
import axios from '../axios'
import request from '../request'

export default function Banner() {
  const [movie, setMovie] = useState()
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(request.fetchNetflixOriginals)
      const randInt = Math.floor(Math.random() * data.results.length - 1)
      setMovie(data.results[randInt])
      return data
    }
    getData()
  }, [])

  // console.log(movie)

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button banner_play">Play</button>
          <button className="banner_button banner_info">More Info</button>
        </div>
        <p className="banner_overview">{truncate(movie?.overview, 150)}</p>
      </div>
    </header>
  )
}
