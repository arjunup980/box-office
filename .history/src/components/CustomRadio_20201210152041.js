import React from 'react'

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <label htmlFor="actors-search">
      Actors
      <input  {...restProps} type="radio" />
    </label>
  )
}

export default CustomRadio
