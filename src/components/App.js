import React from 'react'
import './css/App.css'

import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'

import request from '../request'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        url={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" url={request.fetchTrending} />
      <Row title="Top rated" url={request.fetchTopRated} />
      <Row title="Action TV" url={request.fetchActionTV} />
      <Row title="Mysterr TV" url={request.fetchMysteryTV} />
      <Row title="Drama TV" url={request.fetchDramaTV} />
      <Row title="Comedy TV" url={request.fetchComedyTV} />
    </div>
  )
}

export default App
