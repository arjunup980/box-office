import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';


const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { ...prevState, isLoading: false, error: null, show: action.show }
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

  useReducer(reducer, initialState)

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {

    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
  }).catch(err => {
    if (isMounted) {
      setError(err.message);
      setIsLoading(false);
    }

  });

  return () => {
    isMounted = false;
  }
}, [id]);

console.log('show', show);

if (isLoading) {
  return <div>Data is being Loaded</div>
}
if (error) {
  return <div>Error Occured: {error}</div>
}

return (
  <div>
    this is show page
  </div>
)
};

export default Show
