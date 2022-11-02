export default async function handler(req, res) {
  const graphqlresponse = await fetch(
    'https://graphqllearning1.azurewebsites.net',
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ query: '{hello}' })
    }
  )
  const json = await graphqlresponse.json()
  res.status(200).json(json)
}
