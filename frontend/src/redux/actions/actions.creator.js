import axios from 'axios';
import actionTypes from './action.types';

export function loadPlants() {
  return async dispatch => {
    try {
      const {data} = await axios.get('http://192.168.1.87:5000/api/plants');
      dispatch({
        type: actionTypes.LOAD_PLANTS,
        data,
      });
    } catch (error) {
     
    }
  };
}
export function loadUsers() {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        'http://192.168.1.87:5000/api/users/',
      );
      dispatch({
        type: actionTypes.LOAD_USERS,
        data,
      });
    } catch (error) {}
  };
}

export function addFavoritePlant(favoritePlant) {
  return {
    type: actionTypes.SAVE_FAVORITE,
    favoritePlant,
  };
}

export function deleteFavoritePlant(deletePlant) {
  return {
    type: actionTypes.DELETE_FAVORITE,
    deletePlant,
  };
}
