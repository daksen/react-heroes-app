import React from 'react';
import { mount, shallow } from 'enzyme';
import { AppRouter } from '../../router/AppRouter';
import { AuthContext } from '../../auth/AuthContext';


describe('Pruebas en <AppRouter />', () => {

  test('debe de mostrar el login si no está autenticado', () => {
    const contextValues = {
      dispatch: jest.fn(),
      user: {
        logged: false
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={ contextValues }>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el navbar si está autenticado', () => {
    const contextValues = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        username: "Test"
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={ contextValues }>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
  
});
