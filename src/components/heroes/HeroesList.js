import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

  // const heroes = getHeroesByPublisher(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4 animate__animated animate__fadeIn">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} { ...hero } />
        ))
      }
    </div>
  )
}
