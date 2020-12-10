import React from 'react'

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <label htmlFor="actors-search">
      Actors
      <input type="radio" {...restProps} />
    </label>
  )
}

export default CustomRadio
