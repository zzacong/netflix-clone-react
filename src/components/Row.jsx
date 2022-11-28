import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import './css/Row.css'

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
}
const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

export default function Row({ title, url, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url).then(res => res.json())
      setMovies(data.results)
      return data
    }
    getData()
  }, [url])

  const handleClick = async movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      try {
        const url = await movieTrailer(
          movie?.original_name || movie?.title || movie?.name || ''
        )
        const urlParams = new URL(url).searchParams
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
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${imageBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            loading="lazy"
            className="row_poster"
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
