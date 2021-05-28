import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="row g-4">
          <div className="col-md-4">
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={ superhero } />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text mb-1">{ alter_ego }</p>
              <p className="card-text mb-3">
                <small className="text-muted">{ first_appearance }</small>
              </p>
              <Link to={`./hero/${ id }`}>
                Leer más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
