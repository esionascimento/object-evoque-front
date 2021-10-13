export function Login (email, password) {
  return {
    type: 'login',
    payload: [ email, password ]
  }
}
