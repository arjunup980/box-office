import React from 'react'
import { SeasonsWrapper } from './Seasons.styled';

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>
        Seasons in total: <span>{seasons.length}</span>
      </p>
      <p>
        Episodes in total:{' '}
        <span>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <div>
              <p>Season {season.number}</p>
              <p>
                Episodes: <span>{season.episodeOrder}</span>
              </p>
            </div>
            <div>
              Aired:{' '}
              <span>
                {season.premiereDate} - {season.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SeasonsWrapper>
  );
};

export default Seasons
