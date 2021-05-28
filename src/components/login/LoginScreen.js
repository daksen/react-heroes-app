import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        username: "DakSen"
      }
    });
    
    history.replace(lastPath);
  }

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
