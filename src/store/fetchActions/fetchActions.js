import baseURL from '../../services/services';
import { Login } from '../auth/Auth.action';

export const authLogin = (user) => {
  return (dispatch) => {
    baseURL.post('/login', user)
      .then((res) => {
        console.log('res :', res);
        localStorage.setItem('token', res.data.token);
        dispatch(Login());

        window.location.pathname = '/dashboard';
      })
      .catch(console.log);
  };
};
