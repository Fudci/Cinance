import {GET_ASSETS_COIN, GET_HOME_SYNC} from '@services/AssetsCoin';
import {put, takeLatest} from 'redux-saga/effects';

function* setDataAssets(action) {
  console.log('masuk');
  try {
    const data = yield GET_ASSETS_COIN();
    if (data) {
      const unsortedData = [...data.data];
      const sortedData = [...unsortedData].sort(function (a, b) {
        return b.changePercent24Hr - a.changePercent24Hr;
      });

      const hotsortedData = [...unsortedData].sort(function (a, b) {
        return b.volumeUsd24Hr - a.volumeUsd24Hr;
      });

      const PriceLowData = [...unsortedData].sort(function (a, b) {
        return a.priceUsd - b.priceUsd;
      });

      const PriceHighData = [...unsortedData].sort(function (a, b) {
        return b.priceUsd - a.priceUsd;
      });

      yield put({
        type: 'SET_DATA_ASSETS_COIN',
        payload: hotsortedData,
      });
      yield put({
        type: 'SET_DATA_ASSETS_COIN_MARKET',
        payload: sortedData,
      });
      yield put({
        type: 'SET_DATA_ASSETS_COIN_PRICELOW',
        payload: PriceLowData,
      });
      yield put({
        type: 'SET_DATA_ASSETS_COIN_PRICEHIGH',
        payload: PriceHighData,
      });
    }
  } catch (error) {
    console.log(error, 'erpr ;ist');
    yield put({
      type: 'CLEAR_DATA_ASSETS_COIN',
      payload: action.payload,
    });
  }
}

function* AssetsCoinAction() {
  yield takeLatest('SET_ASSET_COIN', setDataAssets);
}

export default AssetsCoinAction;
