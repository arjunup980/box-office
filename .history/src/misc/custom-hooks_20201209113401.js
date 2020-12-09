import { useReducer } from 'react';


function usePersistedReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
}