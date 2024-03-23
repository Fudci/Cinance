import {GET_ASSETS_COIN_HISTORY} from '@services/AssetsCoin';
import {put, takeLatest} from 'redux-saga/effects';

function* setDataAssetHistory(action) {
  yield put({
    type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H1',
    loading: true,
    payload: [],
    min: '',
    max: '',
  });
  try {
    const response_h1 = yield GET_ASSETS_COIN_HISTORY(action.id, 'h1');
    const datah2 = yield GET_ASSETS_COIN_HISTORY(action.id, 'h2');
    const datah6 = yield GET_ASSETS_COIN_HISTORY(action.id, 'h6');
    const datah12 = yield GET_ASSETS_COIN_HISTORY(action.id, 'h12');
    const datad1 = yield GET_ASSETS_COIN_HISTORY(action.id, 'd1');

    if (response_h1) {
      const newData = response_h1.data.map(item => {
        const {priceUsd, time, date, ...rest} = item;
        return {
          ...rest,
          value: priceUsd,
          date: new Date(item.date), // You can customize this part based on your requirements
        };
      });
      const minMax = newData.reduce(
        (acc, curr) => {
          acc.min = Math.min(acc.min, curr.value);
          acc.max = Math.max(acc.max, curr.value);
          return acc;
        },
        {min: Infinity, max: -Infinity},
      );

      yield put({
        type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H1',
        // payload: PriceHighData,
        payload: newData,
        loading: false,
        min: minMax.min,
        max: minMax.max,
      });
    }
    if (datah2) {
      const newData = datah2.data.map(item => {
        const {priceUsd, time, date, ...rest} = item;
        return {
          ...rest,
          value: priceUsd,
          date: new Date(item.date), // You can customize this part based on your requirements
        };
      });
      const minMax = newData.reduce(
        (acc, curr) => {
          acc.min = Math.min(acc.min, curr.value);
          acc.max = Math.max(acc.max, curr.value);
          return acc;
        },
        {min: Infinity, max: -Infinity},
      );
      yield put({
        type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H2',
        payload: newData,
        loading: false,
        min: minMax.min,
        max: minMax.max,
      });
    }
    if (datah6) {
      const newData = datah6.data.map(item => {
        const {priceUsd, time, date, ...rest} = item;
        return {
          ...rest,
          value: priceUsd,
          date: new Date(item.date), // You can customize this part based on your requirements
        };
      });
      const minMax = newData.reduce(
        (acc, curr) => {
          acc.min = Math.min(acc.min, curr.value);
          acc.max = Math.max(acc.max, curr.value);
          return acc;
        },
        {min: Infinity, max: -Infinity},
      );
      yield put({
        type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H6',
        payload: newData,
        loading: false,
        min: minMax.min,
        max: minMax.max,
      });
    }
    if (datah12) {
      const newData = datah12.data.map(item => {
        const {priceUsd, time, date, ...rest} = item;
        return {
          ...rest,
          value: priceUsd,
          date: new Date(item.date), // You can customize this part based on your requirements
        };
      });
      const minMax = newData.reduce(
        (acc, curr) => {
          acc.min = Math.min(acc.min, curr.value);
          acc.max = Math.max(acc.max, curr.value);
          return acc;
        },
        {min: Infinity, max: -Infinity},
      );
      yield put({
        type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H12',
        payload: newData,
        loading: false,
        min: minMax.min,
        max: minMax.max,
      });
    }

    if (datad1) {
      const newData = datad1.data.map(item => {
        const {priceUsd, time, date, ...rest} = item;
        return {
          ...rest,
          value: priceUsd,
          date: new Date(item.date), // You can customize this part based on your requirements
        };
      });
      const minMax = newData.reduce(
        (acc, curr) => {
          acc.min = Math.min(acc.min, curr.value);
          acc.max = Math.max(acc.max, curr.value);
          return acc;
        },
        {min: Infinity, max: -Infinity},
      );
      yield put({
        type: 'SET_DATA_ASSETS_COIN_HISTORY_D1',
        payload: newData,
        loading: false,
        min: minMax.min,
        max: minMax.max,
      });
    }

    // }
  } catch (error) {
    console.log(error, 'erpr ;ist');
    yield put({
      type: 'CLEAR_DATA_ASSETS_COIN_HISTORY',
      payload: action.payload,
      loading: false,
    });
  }
}

function* AssetHistoryAction() {
  yield takeLatest('SET_COIN_HISTORY', setDataAssetHistory);
}

export default AssetHistoryAction;
