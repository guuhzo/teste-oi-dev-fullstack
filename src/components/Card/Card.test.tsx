import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '.'
import Pokemon from '../../shared/types/pokemon'

describe('Card Component', () => {
  it('renders with pokemon content', async () => {
    const pokeData = {
      name: 'bulbasaur',
      // eslint-disable-next-line max-len
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      stats: [
        { name: 'hp', value: 45 },
        { name: 'attack', value: 45 },
        { name: 'defense', value: 45 }
      ],
      types: ['grass']
    }
    const pokepromise = new Promise<Pokemon>((resolve, reject) => {
      resolve(pokeData)
    })

    render(<Card item={pokepromise} />)
    const image = await screen.findByRole('img')

    expect(image).toHaveAccessibleName('pokemon')
    expect(screen.getByText(pokeData.name.toUpperCase())).toBeInTheDocument()
  })

  it('renders with 404 image', async () => {
    const pokeData = {
      name: 'bulbasaur',
      image: null,
      stats: [
        { name: 'hp', value: 45 },
        { name: 'attack', value: 45 },
        { name: 'defense', value: 45 }
      ],
      types: ['grass']
    }
    const pokepromise = new Promise<Pokemon>((resolve, reject) => {
      resolve(pokeData)
    })

    render(<Card item={pokepromise} />)
    const image = await screen.findByRole('img')

    expect(image).toHaveAccessibleName('not_found')
  })
})
