const path = require('path')
const axios = require('axios')
process.env.NODE_ENV !== 'production' &&
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

exports.handler = async function (event, _context) {
  const { path, queryStringParameters } = event

  const url = new URL(`https://api.themoviedb.org/3/${path.slice(11)}`)

  url.searchParams.append('api_key', process.env.TMDB_API_KEY)

  if (Object.keys(queryStringParameters).length) {
    const [q] = Object.entries(queryStringParameters)
    url.searchParams.append(q?.[0], q?.[1])
  }

  console.log(url.href)
  const { data } = await axios.get(url.href)
  // console.log(data)
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
