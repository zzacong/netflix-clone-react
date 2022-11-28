import { useEffect, useState } from 'react'

import './css/Banner.css'
import request from '../request'

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

export default function Banner() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(request.fetchNetflixOriginals).then(res =>
        res.json()
      )
      const randInt = Math.floor(Math.random() * data.results.length - 1)
      setMovie(data.results[randInt])
      return data
    }
    getData()
  }, [])

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
