import React, { useEffect, useState } from 'react'

import './style.css'
import Card from '../Card'
import { ResultContent } from '../../services/api/types/paginatedResponse'
import Pokemon from '../../shared/types/pokemon'
import { findOne } from '../../services/api'
import normalizePokemonData from '../../utils/normalizePokemonData'

interface CardListProps {
  items: ResultContent[]
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  const [allPokemon, setAllPokemon] = useState<Array<Promise<Pokemon>>>([])

  useEffect(() => {
    const promises: Array<Promise<Pokemon>> = []
    items.forEach(item => {
      promises.push(findOne(item.name)
        .then(({ data }) => {
          return normalizePokemonData(data)
        })
        .catch()
      )
    })
    setAllPokemon(promises)
  }, [items])

  return (
    <div id="clist-container">
      {allPokemon.map((pokemon, index) => (
        <Card
          key={index}
          item={pokemon}
        />
      ))}
    </div>
  )
}

export default CardList
