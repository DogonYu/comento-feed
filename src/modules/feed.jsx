import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_FILTER_CATEGORY, READ_FILTER_CATEGORY_SUCCESS, READ_FILTER_CATEGORY_ERROR] = createRequestActionTypes(
  'feed/READ_FILTER_CATEGORY',
);
const INITIALIZE = 'feed/INITIALIZE';

export const readFilterCategory = createAction(READ_FILTER_CATEGORY);
export const initialize = createAction(INITIALIZE);

const readFilterCategorySaga = createRequestSaga(READ_FILTER_CATEGORY, api.readFilterCategory);

export function* feedSaga() {
  yield takeLatest(READ_FILTER_CATEGORY, readFilterCategorySaga);
}

const initialState = {
  categorys: null,
  feedError: null,
};

export default handleActions(
  {
    [READ_FILTER_CATEGORY_SUCCESS]: (state, { payload: categorys }) => {
      return {
        ...state,
        categorys,
      };
    },
    [READ_FILTER_CATEGORY_ERROR]: (state, { payload: feedError }) => {
      return {
        ...state,
        feedError,
      };
    },
    [INITIALIZE]: () => initialState,
  },
  initialState,
);
