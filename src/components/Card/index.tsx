import React, { useCallback, useEffect, useState } from 'react'

import './style.css'
import Badge from '../Badge'
import Section from '../Section'
import Pokemon from '../../shared/types/pokemon'

import notFoundImage from '../../assets/image_not_found.png'

interface CardProps {
  item: Promise<Pokemon>
}
const Card: React.FC<CardProps> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true)

  const [pokemon, setPokemon] = useState({} as Pokemon)

  const loadPokemonData = useCallback(async () => {
    const loadedPokemon = await item
    setPokemon(loadedPokemon)

    setIsLoading(false)
  }, [item])

  useEffect(() => {
    loadPokemonData()
  }, [loadPokemonData])

  return (
    <>
      {!isLoading && (
        <div id="card-container">
          <div id="card-image-section">
            <img
              id="card-image-content"
              src={pokemon.image ?? notFoundImage}
              style={
                !pokemon.image
                  ? { width: 'auto' }
                  : {}}
              alt={!pokemon.image
                ? 'not_found'
                : 'pokemon'}
            />
          </div>
          <div id="card-info">
            <p id="card-item-name">{pokemon.name.toUpperCase()}</p>
            <Section title="Stats">
              {pokemon.stats.map(stat => (
                <div key={`${stat.name}_${stat.value}`} id="card-stat-item">
                  <p>{stat.name}</p>
                  <p>{stat.value}</p>
                </div>
              ))}
            </Section>
            <Section title="Types">
              <div id="card-badge-container">
                {pokemon.types.map(type => (
                  <Badge key={type} type={type} />
                ))}
              </div>
            </Section>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
