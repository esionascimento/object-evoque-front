import { createStore } from 'redux';

const INITIAL_STATE = {
  email: 'esio@esio.com',
  password: '123456'
};

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {
        ...state,
        email: action.email,
        password: action.password
      }
    default:
      return state;
  }
}

const store = createStore(login);

export default store;
