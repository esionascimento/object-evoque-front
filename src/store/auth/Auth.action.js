export function Login (token) {
  return {
    type: 'LOGIN',
    payload: [ token ]
  }
}

export function Logout (token) {
  return {
    type: 'LOGOUT',
    payload: [ token ]
  }
}
