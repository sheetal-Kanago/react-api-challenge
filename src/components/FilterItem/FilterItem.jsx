import React from 'react'
import "./FilterItem.scss"

const FilterItem = props => {
  const {filterId,filterCriteria,handleChkBox}=props;

  return (
    <div className="chkOption">
      <input type="checkbox" className="filterCheckBox" id={filterId} value={filterCriteria} onChange={()=>handleChkBox(filterId)}/>
      <label className="chkBoxLabel" htmlFor={filterId}>{filterCriteria}</label>
    </div>
  )
}

export default FilterItem
