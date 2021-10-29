import actionTypes from '../actions/action.types';

export default function plantReducer(plants = [], action) {
  let newPlants = plants;

  switch (action.type) {
    case actionTypes.LOAD_PLANTS:
      newPlants = action.data;
      break;

    default:
      break;
  }
  return newPlants;
}
