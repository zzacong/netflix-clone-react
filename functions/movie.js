const path = require('path')
const axios = require('axios')

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

exports.handler = async event => {
  console.log('NODE_VERSION', process.version)

  const { path, queryStringParameters } = event
  const resource = path.match(/(\/api\/movie\/)(.*)/)[2]
  const url = new URL(`https://api.themoviedb.org/3/${resource}`)

  url.searchParams.append('api_key', process.env.TMDB_API_KEY)

  if (Object.keys(queryStringParameters).length) {
    const [q] = Object.entries(queryStringParameters)
    url.searchParams.append(q[0], q[1])
  }

  console.log(url.href)
  const { data } = await axios.get(url.href)
  // console.log(data)
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
