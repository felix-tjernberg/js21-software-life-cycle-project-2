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
      mouth {up {string}, 
      down {string}}, 
      eyes {left {string}, 
      right {string}
    }
  }
  authorOfBrincess(id: $id, authorId: $authorId)
}`

export const GET_ALL_BRINCESSES_QUERY = `{
  brincesses {
      id,
      name,
      backgroundColor {string, imgSrc},
      hair {style, color {string imgSrc} }
      eyes {right {string imgSrc} left {string imgSrc} }
      mouth {up {string imgSrc} down {string imgSrc} }
  }
}`
