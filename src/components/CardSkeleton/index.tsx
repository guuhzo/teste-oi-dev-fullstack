import React from 'react'
import ContentLoader from 'react-content-loader'

export const ImageSkeleton = (
  <rect x="0" y="0" rx="3" ry="3" width="180" height="80" />
)

const CardSkeleton: React.FC = () => {
  return (
    (
      <ContentLoader
        height="100%"
      >
        {ImageSkeleton}
        <rect x="0" y="84" rx="3" ry="3" width="100" height="18" />

        <rect x="0" y="110" rx="3" ry="3" width="100" height="14" />

        <rect x="0" y="126" rx="3" ry="3" width="80" height="12" />
        <rect x="130" y="126" rx="3" ry="3" width="30" height="12" />

        <rect x="0" y="142" rx="3" ry="3" width="80" height="12" />
        <rect x="130" y="142" rx="3" ry="3" width="30" height="12" />

        <rect x="0" y="158" rx="3" ry="3" width="80" height="12" />
        <rect x="130" y="158" rx="3" ry="3" width="30" height="12" />

        <rect x="0" y="184" rx="3" ry="3" width="100" height="12" />

        <rect x="0" y="200" rx="3" ry="3" width="40" height="12" />
        <rect x="44" y="200" rx="3" ry="3" width="40" height="12" />
        <rect x="88" y="200" rx="3" ry="3" width="40" height="12" />
      </ContentLoader>
    )
  )
}

export default CardSkeleton
