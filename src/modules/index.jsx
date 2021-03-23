import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';

export function* rootSaga() {
  yield all([]);
}

const rootReducer = combineReducers({
  loading,
});

export default rootReducer;
