import actionTypes from '../actions/action.types';

function authReducer(user = {isAuthenticated: false}, action) {
  let newUser = user;

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      newUser = {
        isAuthenticated: true,
        userId: action.data.user._id,
        token: action.data.token,
        refreshToken: action.data.refreshToken,
      };
      break;

    case actionTypes.AUTH_LOGIN_ERROR:
      newUser = {
        isAuthenticated: false,
        email: 'Incorrect email',
      };
      break;

    case actionTypes.AUTH_REGISTER:
      newUser = {
        isAuthenticated: true,
        userId: action.data.user._id,
        token: action.data.token,
        refreshToken: action.data.refreshToken,
      };
      break;

    default:
      newUser = user;
      break;
  }
  return newUser;
}
export default authReducer;
