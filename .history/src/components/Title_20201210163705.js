import React from 'react'
import { TitleWrapper } from './Title.styled'

const Title = ({ title, subtitle }) => {
  consolr.log('render');

  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>

    </TitleWrapper>
  )
}

export default Title
