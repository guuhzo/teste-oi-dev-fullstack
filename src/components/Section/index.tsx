import React, { PropsWithChildren } from 'react'

import './style.css'

interface SectionProps extends PropsWithChildren {
  title: string
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div id="section-container">
      <p id="section-title">{title}</p>
      {children}
    </div>
  )
}

export default Section
