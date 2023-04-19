import SingleResponse from '../services/api/types/singleResponse'
import STATS from '../shared/types/stats'
import normalizePokemonData from './normalizePokemonData'

describe('normalizePokemonData helper', () => {
  it('return only mapped stats', () => {
    const rawData = {
      name: 'string',
      stats: [
        {
          base_stat: 10,
          stat: {
            name: 'attack'
          }
        },
        {
          base_stat: 10,
          stat: {
            name: 'deffense'
          }
        },
        {
          base_stat: 10,
          stat: {
            name: 'hp'
          }
        },
        {
          base_stat: 10,
          stat: {
            name: 'special-attack'
          }
        }
      ],
      sprites: {
        other: {
          dream_world: {
            front_default: 'url...'
          }
        }
      },
      types: [{
        type: {
          name: 'any'
        }
      }]
    } as SingleResponse
    const pokeData = normalizePokemonData(rawData)

    const unauthorizedStats =
      pokeData.stats.filter(stat => !STATS.includes(stat.name))

    expect(unauthorizedStats.length).toBe(0)
  })
})
