import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';


describe('Pruebas en <NavBar />', () => {
  // CUSTOM HISTORY
  const historyMock = {
    location: {},
    push: jest.fn(),
    replace: jest.fn(),
    createHref: jest.fn(),
    listen: jest.fn()
  };

  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      username: "Test"
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValues }>
      <MemoryRouter>
        <Router history={ historyMock }>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span.text-info").text().trim()).toBe("Test")
  });

  test('debe de llamar el logout y usar el history', () => {
    wrapper.find('button').prop('onClick')();
    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });

});
