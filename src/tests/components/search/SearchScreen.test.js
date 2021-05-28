import React from 'react';
import { mount } from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router';
import reactRouter from 'react-router';


describe('Pruebas en <SearchScreen />', () => {

  test('debe de mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search">
          <SearchScreen />
        </Route>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div.alert-info").text().trim()).toBe("Search a hero");
  });

  test('debe de mostrar el search y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search">
          <SearchScreen />
        </Route>
      </MemoryRouter>
    );
    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar un error si no se encuentra el heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=test"]}>
        <Route path="/search">
          <SearchScreen />
        </Route>
      </MemoryRouter>
    );
    expect(wrapper.find("div.alert-danger").text().trim()).toBe('There ir no a hero with "test"');
  });

  test('debe de llamar el push del history', () => {
    const mockPush = jest.fn();
    reactRouter.useHistory = jest.fn().mockReturnValue({
      push: mockPush,
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search">
          <SearchScreen />
        </Route>
      </MemoryRouter>
    );
    wrapper.find("input").simulate("change", {
      target: {
        name: "search",
        value: "batman"
      }
    });
    wrapper.find("form").prop("onSubmit")({
      preventDefault(){}
    });
    expect(mockPush).toHaveBeenCalledWith("?q=batman");
  });
  
});
