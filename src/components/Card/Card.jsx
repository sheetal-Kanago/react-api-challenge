import React from 'react'
import "./Card.scss";

const Card = props => {
  const {key,beer}=props;
  
  return (
    <div className="card">
      <h3>{beer.name}</h3>
      <h4>{beer.tagline}</h4>
      <img src={beer.image_url} alt="" />
      <h4>ABV: {beer.abv}</h4>
      <h4>First Brewed: {beer.first_brewed}</h4>
      <h4>pH: {beer.ph}</h4>

    </div>
  )
}

export default Card
