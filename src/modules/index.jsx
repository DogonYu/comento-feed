import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import feed, { feedSaga } from './feed';

export function* rootSaga() {
  yield all([feedSaga()]);
}

const rootReducer = combineReducers({
  feed,
});

export default rootReducer;
