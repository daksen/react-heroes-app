import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router';
import reactRouter from 'react-router';

describe('Pruebas en <HeroScreen />', () => {

  test('debe de mostrar el componente redirect si no hay argumentos en el URL ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('debe de mostrar un heroe si existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:id">
          <HeroScreen />
        </Route>
      </MemoryRouter>
    );
    expect(wrapper.find("div.row").exists()).toBe(true);
  });

  test('debe de llamar history.push', () => {
    const mockPush = jest.fn();
    const mockGoBack = jest.fn();
    reactRouter.useHistory = jest.fn().mockReturnValue({
      length: 1,
      push: mockPush,
      goBack: mockGoBack
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:id">
          <HeroScreen />
        </Route>
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(mockPush).toHaveBeenCalledWith('/');
    expect(mockGoBack).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

});
