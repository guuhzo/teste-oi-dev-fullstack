interface SingleResponse {
  name: string
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
  sprites: {
    front_default: string | null
    other: {
      dream_world: {
        front_default: string | null
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
}

export default SingleResponse
