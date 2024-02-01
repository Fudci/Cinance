import {GET_ASSETS_COIN_HISTORY} from '@services/AssetsCoin';
import {put, takeLatest} from 'redux-saga/effects';

function* setDataAssetHistory(action) {
  console.log(action, 'laskdfjlksdjfldsj');
  try {
    const data = yield GET_ASSETS_COIN_HISTORY(action.id, action.interval);
    if (data) {
      const newData = data.data.map(item => {
        const {priceUsd, time, date, ...rest} = item;
        return {
          ...rest,
          value: priceUsd,
          date: new Date(item.date), // You can customize this part based on your requirements
        };
      });

      yield put({
        type: 'SET_DATA_ASSETS_COIN_HISTORY_D1',
        payload: newData,
      });
      // yield put({
      //   type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H12',
      //   payload: sortedData,
      // });
      // yield put({
      //   type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H6',
      //   payload: PriceLowData,
      // });
      // yield put({
      //   type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H2',
      //   payload: PriceHighData,
      // });
      // yield put({
      //   type: 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H1',
      //   payload: PriceHighData,
      // });
    }
  } catch (error) {
    console.log(error, 'erpr ;ist');
    yield put({
      type: 'CLEAR_DATA_ASSETS_COIN_HISTORY',
      payload: action.payload,
    });
  }
}

function* AssetHistoryAction() {
  yield takeLatest('SET_COIN_HISTORY', setDataAssetHistory);
}

export default AssetHistoryAction;
