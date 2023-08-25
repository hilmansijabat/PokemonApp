import React from 'react'
import './Pokemon.css'

const Pokemon = ({ title, text, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  )
}

export default Pokemon