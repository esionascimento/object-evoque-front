import api from '../../services/services';
import { Login } from '../auth/Auth.action';

export const authLogin = (user) => {
console.log('user :', user);
  return (dispatch) => {
    api.post('/login', user)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(Login());
      })
      .catch(console.log('lsadfjlkajslfdkjalsdf'));
  };
};