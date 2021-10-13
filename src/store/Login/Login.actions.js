export function Login (email) {
  return {
    type: 'login',
    payload: [ email ]
  }
}
