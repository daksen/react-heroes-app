import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

  const history = useHistory();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [{search}, handleInputChange] = useForm({
    'search': q
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const hanldeSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h4>Search Form</h4>
          <hr/>
          <form onSubmit={ hanldeSearch } className="animate__animated animate__fadeIn">
            <input 
              type="text"
              name="search"
              placeholder="Find your hero..."
              autoComplete="off"
              className="form-control"
              value={search}
              onChange={ handleInputChange }
            />
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-outline-success mt-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-7">
          <h4>Results</h4>
          <hr/>
          <div className="animate__animated animate__fadeIn">

            {
              (q === "") &&
                <div className="alert alert-info">
                  Search a hero
                </div>
            }
            {
              (q !== "" && heroesFiltered.length === 0) &&
                <div className="alert alert-danger">
                  There ir no a hero with "{q}"
                </div>
            }
            {
              heroesFiltered.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
