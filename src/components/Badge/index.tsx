import React from 'react'

import './style.css'
import COLOR_TYPES from '../../shared/types/pokemonColorTypes'

interface BadgeProps {
  type: string
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <span
      style={{
        backgroundColor: COLOR_TYPES.get(type)?.background ?? '#777',
        color: COLOR_TYPES.get(type)?.text ?? '#777'
      }}
    >
      {type}
    </span>)
}

export default Badge
