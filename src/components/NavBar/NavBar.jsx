import React from 'react'

import "./NavBar.scss";

import SearchBox from  "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const NavBar = props => {
  const {searchText,handleInput,handleChkBox}=props;
  return (
    <div className="navbar">
      <SearchBox  searchText={searchText} handleInput={handleInput}/>
      
      <FiltersList handleChkBox={handleChkBox} />
    </div>
  )
}

export default NavBar
