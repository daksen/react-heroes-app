import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace('/login');
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand h1 mb-0" to="/">
          HEROES-APP
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav me-auto">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </div>
          <div className="navbar-nav">
            <span className="nav-item nav-link text-info m-0">
              { user.username }
            </span>
            <button
              className="nav-item nav-link btn"
              onClick={ handleLogout }
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
