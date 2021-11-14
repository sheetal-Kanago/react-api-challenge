import React from 'react';
import "./SearchBox.scss";

const SearchBox = props => {
  const {searchText,handleInput}=props;
  return (
    <form className="search-box">
      <input type="text" name="searchBox" placeholder="Search" value={searchText} onInput={handleInput} className="search-box__input"/>
    </form>
  )
}

export default SearchBox
