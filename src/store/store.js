import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './Login/Login.reducer';
import AuthReducer from './auth/Auth.reducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  login: LoginReducer,
  auth: AuthReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
