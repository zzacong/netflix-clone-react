// const baseUrl = '/.netlify/functions/movie'
const baseUrl = '/api/movie'

export default {
  fetchNetflixOriginals: `${baseUrl}/discover/tv?with_networks=213`,
  fetchTrending: `${baseUrl}/trending/all/week?`,
  fetchTopRated: `${baseUrl}/movie/top_rated?`,
  fetchActionTV: `${baseUrl}/discover/tv?with_genres=10759`,
  fetchMysteryTV: `${baseUrl}/discover/tv?with_genres=9648`,
  fetchDramaTV: `${baseUrl}/discover/tv?with_genres=18`,
  fetchComedyTV: `${baseUrl}/discover/tv?with_genres=35`,
}
