const path = require('path')
const axios = require('axios')
if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

exports.handler = async function (event, _context) {
  try {
    const { path, queryStringParameters } = event

    const url = new URL(`https://api.themoviedb.org/3/${path.slice(11)}`)

    url.searchParams.append('api_key', process.env.TMDB_API_KEY)

    if (Object.keys(queryStringParameters).length) {
      const [q] = Object.entries(queryStringParameters)
      url.searchParams.append(q?.[0], q?.[1])
    }
    const { data } = await axios.get(url.href)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify(error),
    }
  }
}
