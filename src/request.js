const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}`,
  fetchActionTV: `discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchMysteryTV: `discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchDramaTV: `discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchComedyTV: `discover/tv?api_key=${API_KEY}&with_genres=35`,
}

export default requests
