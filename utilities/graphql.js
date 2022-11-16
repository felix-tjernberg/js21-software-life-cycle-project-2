export const ADD_BRINCESS_QUERY = `mutation AddBrincess($brincess: BrincessInput!) {
  addBrincess(brincessInput: $brincess) {name}
}`

export const EDIT_BRINCESS_QUERY = `mutation EditBrincess($brincess: BrincessInput!) {
  editBrincess(brincessInput: $brincess) {name}
}`

export const GET_BRINCESS_DATA_QUERY = `query BrincessData($id: ID!, $authorId: ID!) {
    brincess(id: $id) {
      id, 
      backgroundColor {string}, 
      hair {style, color {string}}, 
      name, 
      mouth {up {string}, down {string}},
      eyes {left {string}, right {string}, pupils {string}},
      spells {first {name, description}, second {name, description}},
      body {head {string}, torso {string}, type},
      health
    }
  authorOfBrincess(id: $id, authorId: $authorId)
}`

export const GET_ALL_BRINCESSES_QUERY = `{
  brincesses {
      id,
      name,
      backgroundColor {string },
      hair {style, color {string} }
      eyes {right {string} left {string} pupils {string} }
      mouth {up {string} down {string} }
      spells {first {name, description} second {name, description} }
      body {head {string}, torso {string}, type},
      health
  }
}`

export async function graphqlRequest(query, variables) {
    const graphqlResponse = await fetch(
        process.env.NEXT_PUBLIC_GRAPHQL_ADRESS,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        }
    )
    const json = await graphqlResponse.json()
    return json.data
}
