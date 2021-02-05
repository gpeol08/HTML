import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroesScreen = ({history}) => {
	const { heroeId } = useParams();

	// const [heroe] = getHeroesById(heroeId);

    const [heroe] =useMemo(() => getHeroesById(heroeId), [heroeId])

	if (!heroe) return <Redirect to="/" />;
   
	const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe;
   
    const handleReturn=()=>{
        if(history.length <=2){
            history.push('/')
        }else{
            history.goBack();
        }

    }

	return (
    <div className='row mt-5'>
        <div className="col-4">
            <img src={`../assets/${id}.jpg`}
            alt={superhero}
            className='img-thumbnail animate__animated animate__fadeInLeft'/>
        </div>
        <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{alter_ego}</li>
                <li className="list-group-item">{publisher}</li>
                <li className="list-group-item">{first_appearance}</li>
            </ul>
            <h5>Characters</h5>
            <p>{characters}</p>

            <button 
            onClick={handleReturn}
            className='btn btn-outline-info'>Return </button>
        </div>
         </div>);
};
