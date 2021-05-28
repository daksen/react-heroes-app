import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {
  
  test('debe retornar el estado por defecto', () => {
    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});
  });
  
  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        username: "Test"
      }
    }
    const state = authReducer({logged: false}, action);
    expect(state).toEqual({
      logged: true,
      username: "Test"
    });
  });

  test('debe de borrar el name del ususario logged en false', () => {
    const action = {
      type: types.logout
    }
    const state = authReducer({logged: true, username: "Test"}, action);
    expect(state).toEqual({
      logged: false,
    });
  });
  
});
