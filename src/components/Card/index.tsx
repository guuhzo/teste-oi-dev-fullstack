import React, { useCallback, useEffect, useState } from 'react'

import './style.css'
import Badge from '../Badge'
import Section from '../Section'
import Pokemon from '../../shared/types/pokemon'

import notFoundImage from '../../assets/image_not_found.png'
import CardSkeleton, { ImageSkeleton } from '../CardSkeleton'
import ContentLoader from 'react-content-loader'

interface CardProps {
  item: Promise<Pokemon>
}
const Card: React.FC<CardProps> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageDidLoad, setImageDidLoad] = useState(false)
  const [pokemon, setPokemon] = useState({} as Pokemon)

  const loadPokemonData = useCallback(async () => {
    setIsLoading(true)
    setImageDidLoad(false)

    const loadedPokemon = await item
    setPokemon(loadedPokemon)

    setIsLoading(false)
  }, [item])

  useEffect(() => {
    loadPokemonData()
  }, [loadPokemonData])

  return (
    <>
      <div id="card-container">
        {!isLoading
          ? (
            <>

              <div id="card-image-section">
                <>
                  <img
                    id="card-image-content"
                    src={pokemon.image ?? notFoundImage}
                    style={imageDidLoad ? {} : { width: 0, height: 0 }}
                    alt={!pokemon.image
                      ? 'not_found'
                      : 'pokemon'}
                    onLoad={() => { setImageDidLoad(true) }}
                  />
                  {!imageDidLoad && (
                    <ContentLoader style={{ height: 80 }}>
                      {ImageSkeleton}
                    </ContentLoader>
                  )}
                </>
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
            </>)
          : (<CardSkeleton />)
        }
      </div>
    </>
  )
}

export default Card
