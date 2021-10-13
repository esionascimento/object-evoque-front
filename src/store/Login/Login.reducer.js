const INITIAL_STATE = {
  email: '',
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'login':
      return {
        email: action.payload[0]
      }
    default:
      return state;
  }
}
