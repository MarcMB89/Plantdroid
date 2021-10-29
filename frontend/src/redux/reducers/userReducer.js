import actionTypes from '../actions/action.types';

export default function userReducer(user = {}, action) {
  let newUser = user;

  switch (action.type) {
    case actionTypes.LOAD_USERS:
      newUser = action.data;
      break;

    default:
      newUser = user;
      break;
  }
  return newUser;
}
