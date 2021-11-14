import React, {useState, useEffect} from 'react'
import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import Main from "./containers/Main/Main";

import beers from "./data/beers";

const App = () => {
  // const [beers, setBeers]=useState(null);

  // useEffect(()=>{
  //   fetch('https://api.punkapi.com/v2/beers')
  //     .then(res=> res.json())
  //     // .then(beers => setBeers(beers))
  //     .then(beers => {
  //       console.log("==================");
  //       console.log(beers);
  //       setBeers(beers)
  //     })
  //     .catch(err=> console.log(err))
  // },[]);

  const [searchText, setSearchText]=useState("");
  const handleInput=event=>{
    const cleanInput = event.target.value.toLowerCase();
    setSearchText(cleanInput);
  };
  const [highABV, setHighABV]=useState(false);
  const [classicRange, setClassicRange]=useState(false);
  const [acidic,setAcidic]=useState(false);
  const handleChkBox=(filterId)=>{
    switch(filterId){
      case "highABV":
        setHighABV(!highABV);
        return;
      case "classicRange":
        setClassicRange(!classicRange);
        return;  
      case "acidic":
        setAcidic(!acidic);
        return; 
    }
  }

  const filteredBeers=beers.filter(beer=>{
    const beerNameLowerCase=beer.name.toLowerCase();
    // console.log(parseInt(beer.first_brewed.split("/")[1]));
    if(!beerNameLowerCase.includes(searchText)){
      return false;
    }else if(highABV && (beer.abv > 6) ){
      return false;
    }else if(classicRange && (beer.first_brewed.split("/")[1] > 2010)){
      return false;
    }else if(acidic && (beer.ph < 4)){
      return false;
    }
    return true;
  })
  return (
    <div className="app">
      <NavBar className="navbar" searchText={searchText} handleInput={handleInput} handleChkBox={handleChkBox} />
      <Main beers={filteredBeers} className="main"/>
    </div>
  )
}

export default App
