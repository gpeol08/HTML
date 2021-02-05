import React, { useMemo, useState } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesGetByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location =useLocation();
    const {q =''}= queryString.parse(location.search);

    const [state, setstate]= useState(q)
	const heroesFilters =useMemo(() => getHeroesGetByName(q), [q]) ;

    const handleChange =({target}) =>{
        setstate(target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        history.push(`?q=${state}`)
    }
	return (
		<div>
			<div className="row">
				<div className="col-5">
					<h1>Search Screen</h1>
					<hr />
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="Find your hero" className="form-control"
                        autoComplete='off'
                        value ={state}
                        onChange={handleChange} />
						<button type="submit" className="btn m-1 btn-block btn-outline-primary">
							search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Result</h4>
                    <hr />

                    {
                        (q==='')
                        && <div className="alert alert-info">Search Hero</div>
                    }
                    {
                        (q!=='' && heroesFilters.length ===0)
                        && <div className="alert alert-danger">Heroe no encontrado</div>
                    }
					{heroesFilters.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
