import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Row from './components/Row'

import request from './request'

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
      <Row title="Mystery TV" url={request.fetchMysteryTV} />
      <Row title="Drama TV" url={request.fetchDramaTV} />
      <Row title="Comedy TV" url={request.fetchComedyTV} />
    </div>
  )
}

export default App
