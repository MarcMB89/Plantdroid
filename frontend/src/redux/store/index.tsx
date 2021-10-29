import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState?: any) {
  const componseEnhancers = compose;

  return createStore(
    rootReducer,
    initialState,
    componseEnhancers(applyMiddleware(thunk)),
  );
}
