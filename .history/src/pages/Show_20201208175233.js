import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import { ShowMainData } from '../components/show/ShowMainData';
import { Details } from '../components/show/Details';
import { Seasons } from '../components/show/Seasons';
import { Cast } from '../components/show/Cast';




const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, error: null, show: action.show }
    }
    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };

    }


    default: return prevState
  }
}

const initialState = {
  show: null,
  isLoading: true,
  error: null
}

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {

    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {

          dispatch({ type: 'FETCH_SUCCESS', show: results })
        }
      })
  }).catch(err => {
    if (isMounted) {
      dispatch({ type: 'FETCH_FAILED', error: err.message })
    }

  });

  return () => {
    isMounted = false;
  };
}, [id]);


if (isLoading) {
  return <div>Data is being Loaded</div>
}
if (error) {
  return <div>Error Occured: {error}</div>
}

return (
  <div>
    <ShowMainData />
    <div>
      <h2>Details</h2>
      <Details />
    </div>

    <div>
      <h2>Seasons</h2>
      <Seasons />
    </div>

    <div>
      <h2>Cast</h2>
      <Cast />
    </div>
  </div>
)
};

export default Show
