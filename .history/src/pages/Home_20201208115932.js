import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);

  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results found</div>
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>

          ))}
        </div>
      );

    }
    return null;
  }



  return (
    <MainPageLayout>
      <input type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown} value={input} />
      <div>
        <label>
          Shows
        <input type="radio" />
        </label>

        <label>
          Actors
      <input type="radio" />
        </label>

      </div>
      <button type="button" onClick={onSearch}>Search</button>
      {renderResults()}

    </MainPageLayout>
  )
};

export default Home
