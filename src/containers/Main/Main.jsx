import React from 'react';

import "./Main.scss";

import CardList from "../../components/CardList/CardList";

const Main = props => {
  // console.log(props);
  const beers=props.beers;
  // console.log(beers);

  return (
    <div className="main">
      <CardList beers={beers} />
    </div>
  )
}

export default Main
