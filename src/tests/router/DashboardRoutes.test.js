import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from "enzyme";
import { DashboardRoutes } from "../../router/DashboardRoutes";
import { AuthContext } from '../../auth/AuthContext';


describe('Pruebas en <DashboardRoutes />', () => {

  test('debe de mostrarse correctamente', () => {
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
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span.text-info").text().trim()).toBe("Test");
  });
  
});
 