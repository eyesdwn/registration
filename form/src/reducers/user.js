import { Types } from '../constants/actionTypes';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  formSubmitted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.REGISTER:
      return {
        ...state,
        user: action.payload.user,
        formSubmitted: false
      }
    default:
      return state;
  }
}

export default reducer;