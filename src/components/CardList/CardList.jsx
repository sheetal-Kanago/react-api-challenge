import React from 'react'
import "./CardList.scss"
import Card from "../Card/Card"

const CardList = props => {
  // console.log(props);
  const beers=props.beers;
  // console.log(beers);

  return (
    <div className="cardlist">
      {
        beers.map(beer=>(
          <Card key={beer.id} beer={beer}/>
          // beer.name
        ))
      }      
    </div>
  )
}

export default CardList
