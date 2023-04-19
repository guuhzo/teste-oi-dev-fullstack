interface Pokemon {
  name: string
  image: string | null
  stats: Array<{
    name: string
    value: number
  }>
  types: string[]
}

export default Pokemon
