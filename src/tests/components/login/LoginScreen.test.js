import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('Pruebas en <LoginScreen />', () => {

  const historyMock = {
    location: {},
    replace: jest.fn(),
    createHref: jest.fn(),
    listen: jest.fn()
  };

  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValues }>
      <Router history={ historyMock }>
        <LoginScreen />
      </Router>
    </AuthContext.Provider>
  );
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('debe de realizar el dispatch, la navegación y el localStorage', () => {
    const handleClick = wrapper.find("button").prop("onClick");
    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        username: "DakSen"
      }
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });

});
