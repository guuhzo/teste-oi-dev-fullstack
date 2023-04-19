import SingleResponse from '../services/api/types/singleResponse'
import Pokemon from '../shared/types/pokemon'
import STATS from '../shared/types/stats'

const normalizePokemonData = (rawData: SingleResponse): Pokemon => {
  return {
    name: rawData.name,
    image:
      rawData.sprites.other.dream_world.front_default ??
      rawData.sprites.front_default,
    stats: rawData.stats
      .filter(item => STATS.includes(item.stat.name))
      .map(item => ({ name: item.stat.name, value: item.base_stat })),
    types: rawData.types.map(item => item.type.name)
  }
}

export default normalizePokemonData
