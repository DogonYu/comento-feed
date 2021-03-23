import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import feed, { feedSaga } from './feed';

export function* rootSaga() {
  yield all([feedSaga()]);
}

const rootReducer = combineReducers({
  loading,
  feed,
});

export default rootReducer;
