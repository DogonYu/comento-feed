import { call, put } from 'redux-saga/effects';

const createRequestActionTypes = type => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return [type, SUCCESS, ERROR];
};

const createRequestSaga = (type, request) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* (action) {
    try {
      const res = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: res.data });
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true });
    }
  };
};

export default { createRequestActionTypes, createRequestSaga };
