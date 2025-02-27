import React from 'react'

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <label htmlFor={restProps.id}>
      Actors
      {label}
      <input  {...restProps} type="radio" />
    </label>
  )
}

export default CustomRadio
