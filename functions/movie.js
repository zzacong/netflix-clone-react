const axios = require('axios')
const path = require('path')

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

exports.handler = async event => {
  console.log('NODE_ENV: ', process.env.NODE_ENV)
  const { path, queryStringParameters } = event

  console.log(path)
  console.log(queryStringParameters)

  const url = new URL(`https://api.themoviedb.org/3/${path.slice(11)}`)

  url.searchParams.append('api_key', process.env.TMDB_API_KEY)

  if (Object.keys(queryStringParameters).length) {
    const [q] = Object.entries(queryStringParameters)
    url.searchParams.append(q?.[0], q?.[1])
  }

  try {
    const { data } = await axios.get(url.href)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
