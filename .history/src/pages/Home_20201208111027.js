import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = ev => {
    setInput(ev.target.value);

  }
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} value={input} />
      <button type="button" onClick={ }>Search</button>

    </MainPageLayout>
  )
}

export default Home
