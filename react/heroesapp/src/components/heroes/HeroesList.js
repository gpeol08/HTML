import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
	// const heroes = getHeroesByPublisher(publisher);


	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	return (
		<div className='card-columns animate__animated animate__bounce'>
			{heroes.map((heroe) => (
                <HeroCard key={heroe.id}  {...heroe}/>
			))}
		</div>
	);
};
