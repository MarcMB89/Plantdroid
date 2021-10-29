import axios from 'axios';

import actionTypes from '../actions/action.types';

type User = {
  email: string;
  password: string;
};

export function login(user: User) {
  return async (dispatch: any) => {
    try {
      const {data} = await axios.post(
        'http://192.168.1.87:5000/api/login',
        user,
      );

      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data,
      });
    } catch (error: any) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message,
        });
      }
    }
  };
}
export function userRefreshToken(refreshToken: string) {
  return async (dispatch: any) => {
    try {
      const {data} = await axios.post('http:/192.168.0.24.:5000/refreshToken', {
        refreshToken,
      });

      console.log(data);
      return dispatch({
        type: actionTypes.REFRESH_TOKEN,
        token: data,
      });
    } catch (error: any) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message,
        });
      }
    }
  };
}

export function register(UserData: any) {
  return async (dispatch: any) => {
    try {
      const {data} = await axios.post('http://192.168.1.87:5000/api/register', {
        UserData,
      });
      if (data) {
        dispatch({
          type: actionTypes.AUTH_REGISTER,
          user: data,
        });
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status === 500) {
        return dispatch({
          type: actionTypes.AUTH_REGISTER_ERROR,
          message: error.message,
        });
      }
    }
  };
}

export function logOut() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
