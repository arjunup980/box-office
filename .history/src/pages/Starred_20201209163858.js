import React from 'react'
import MainPageLayout from '../components/MainPageLayout';
import {useShows} from '../misc/custom-hooks';

const Starred = () => {

const [starred] = useShows()

const [shows, setShows] = useState(null);

  return (
    <MainPageLayout>
    This is Starred
      
    </MainPageLayout>
  )
}

export default Starred
