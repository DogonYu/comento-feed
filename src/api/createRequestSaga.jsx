import { call, put } from 'redux-saga/effects';

export const createRequestActionTypes = type => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return [type, SUCCESS, ERROR];
};

export default function createRequestSaga(type, request) {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* (action) {
    try {
      const res = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: res.data });
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true });
    }
  };
}
