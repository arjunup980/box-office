import React from 'react'

const CustomRadio = ({ label, }) => {
  return (
    <label htmlFor="actors-search">
      Actors
      <input
        id="actors-search"
        type="radio"
        value="people"
        checked={!isShowsSearch}
        onChange={onRadioChange}
      />
    </label>
  )
}

export default CustomRadio
