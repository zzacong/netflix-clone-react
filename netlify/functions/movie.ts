import type { Handler } from '@netlify/functions'

import fetch from 'node-fetch'

const handler: Handler = async (event, context) => {
  const resource = event.path.match(/(\/movie\/)(.*)/)?.[2]
  const url = new URL(`https://api.themoviedb.org/3/${resource}`)

  url.searchParams.append('api_key', process.env.TMDB_API_KEY ?? '')

  if (event.queryStringParameters) {
    Object.entries(event.queryStringParameters).forEach(([k, v]) => {
      url.searchParams.append(k, v ?? '')
    })
  }

  console.log(url.toString())

  const data = await fetch(url.toString()).then(res => res.json())

  // console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export { handler }
