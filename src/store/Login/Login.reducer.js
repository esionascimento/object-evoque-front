const INITIAL_STATE = {
  email: 'esio@esio.com',
  password: '123456',
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'login':
      return {
        email: action.payload[0],
        password: action.payload[1]
      }
    default:
      return state;
  }
}
