import React, { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const history = useHistory();
  const {id} = useParams();
  const hero =  useMemo(() => getHeroById(id), [id]);

  if(!hero) {
    return <Redirect to="/" />
  }

  const handleReturn = () => {
    if(history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  return (
    <div className="container mt-5">
      <div className="row animate__animated animate__fadeIn">
        <div className="col-4">
          <img src={`../assets/heroes/${id}.jpg`} className="img-thumbnail" alt={ superhero } />
        </div>
        <div className="col-8">
          <h3>{ superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
            <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
            <li className="list-group-item"><b>First appearance:</b> { first_appearance }</li>
          </ul>
          <h5 className="mt-3">Characters:</h5>
          <p>{ characters }</p>
          <button 
            className="btn btn-outline-danger"
            onClick={ handleReturn }
          >
            Return
          </button>
        </div>
      </div>
    </div>
  )
}
