import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_FEEDS, READ_FEEDS_SUCCESS, READ_FEEDS_ERROR] = createRequestActionTypes('feed/READ_FEEDS');
const [READ_FILTER_CATEGORYS, READ_FILTER_CATEGORYS_SUCCESS, READ_FILTER_CATEGORYS_ERROR] = createRequestActionTypes(
  'feed/READ_FILTER_CATEGORYS',
);
const [READ_ADS, READ_ADS_SUCCESS, READ_ADS_ERROR] = createRequestActionTypes('feed/READ_ADS');
const [READ_DETAIL_FEED, READ_DETAIL_FEED_SUCCESS, READ_DETAIL_FEED_ERROR] = createRequestActionTypes(
  'feed/READ_DETAIL_FEED',
);
const SET_ORD = 'feed/SET_ORD';
const SET_FILTER = 'feed/SET_FILTER';
const SET_HIDE_ADS = 'feed/SET_HIDE_ADS';
const INITIALIZE = 'feed/INITIALIZE';

export const readFeeds = createAction(READ_FEEDS, ({ page, ord, category, limit }) => ({ page, ord, category, limit }));
export const readFilterCategorys = createAction(READ_FILTER_CATEGORYS);
export const readAds = createAction(READ_ADS, ({ page, limit }) => ({ page, limit }));
export const readDetailFeed = createAction(READ_DETAIL_FEED, id => id);
export const setOrd = createAction(SET_ORD, ord => ord);
export const setFilter = createAction(SET_FILTER, filter => filter);
export const setHideAds = createAction(SET_HIDE_ADS, isHideAds => isHideAds);
export const initialize = createAction(INITIALIZE);

const readFeedsSaga = createRequestSaga(READ_FEEDS, api.readFeeds);
const readFilterCategorysSaga = createRequestSaga(READ_FILTER_CATEGORYS, api.readFilterCategorys);
const readAdsSaga = createRequestSaga(READ_ADS, api.readAds);
const readDetailFeedSaga = createRequestSaga(READ_DETAIL_FEED, api.readDetailFeed);

export function* feedSaga() {
  yield takeLatest(READ_FEEDS, readFeedsSaga);
  yield takeLatest(READ_FILTER_CATEGORYS, readFilterCategorysSaga);
  yield takeLatest(READ_ADS, readAdsSaga);
  yield takeLatest(READ_DETAIL_FEED, readDetailFeedSaga);
}

const initialState = {
  feeds: {
    data: [],
  },
  categorys: null,
  ads: {
    data: [],
  },
  detailFeed: null,
  ordType: 'asc',
  filterCategory: [1, 2, 3],
  isHideAds: false,
  feedsError: null,
  categoryError: null,
  adError: null,
  feedError: null,
};

export default handleActions(
  {
    [READ_FEEDS_SUCCESS]: (state, { payload: feeds }) => {
      return {
        ...state,
        feeds: {
          ...feeds,
          data: state.feeds.data.concat(feeds.data),
        },
      };
    },
    [READ_FEEDS_ERROR]: (state, { payload: feedsError }) => {
      return {
        ...state,
        feedsError,
      };
    },
    [READ_FILTER_CATEGORYS_SUCCESS]: (state, { payload: categorys }) => {
      return {
        ...state,
        categorys,
      };
    },
    [READ_FILTER_CATEGORYS_ERROR]: (state, { payload: categoryError }) => {
      return {
        ...state,
        categoryError,
      };
    },
    [READ_ADS_SUCCESS]: (state, { payload: ads }) => {
      return {
        ...state,
        ads: {
          ...ads,
          data: state.ads.data.concat(ads.data),
        },
      };
    },
    [READ_ADS_ERROR]: (state, { payload: adError }) => {
      return {
        ...state,
        adError,
      };
    },
    [READ_DETAIL_FEED_SUCCESS]: (state, { payload: detailFeed }) => {
      return {
        ...state,
        detailFeed: detailFeed.data,
      };
    },
    [READ_DETAIL_FEED_ERROR]: (state, { payload: feedError }) => {
      return {
        ...state,
        feedError,
      };
    },
    [SET_ORD]: (state, { payload: ordType }) => {
      return {
        ...state,
        ordType,
      };
    },
    [SET_FILTER]: (state, { payload: filterCategory }) => {
      return {
        ...state,
        filterCategory,
      };
    },
    [SET_HIDE_ADS]: (state, { payload: isHideAds }) => {
      return {
        ...state,
        isHideAds,
      };
    },
    [INITIALIZE]: state => {
      return {
        ...state,
        feeds: initialState.feeds,
      };
    },
  },
  initialState,
);
