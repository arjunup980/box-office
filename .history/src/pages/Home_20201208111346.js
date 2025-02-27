import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = ev => {
    setInput(ev.target.value);

  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=mens
  };
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} value={input} />
      <button type="button" onClick={onSearch}>Search</button>

    </MainPageLayout>
  )
}

export default Home
