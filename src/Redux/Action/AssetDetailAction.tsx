import { GET_ASSETS_COIN_DETAIL } from '@services/AssetsCoin';
import { put, takeLatest } from 'redux-saga/effects';

interface Action {
  type: string;
  id: string; // Assuming id is a string
  payload?: any; // Adjust the type according to your payload data
}

function* setDataAssetDetail(action: Action) {
  yield put({
    type: 'SET_DATA_ASSETS_COIN_DETAIL',
    payload: [],
    loading: true,
  });
  try {
    const response = yield GET_ASSETS_COIN_DETAIL(action.id);
    console.log(response, 'this response');
    if (response) {
      yield put({
        type: 'SET_DATA_ASSETS_COIN_DETAIL',
        payload: response.data,
        loading: false,
      });
    }
  } catch (error) {
    console.log(error, 'error');
    yield put({
      type: 'CLEAR_DATA_ASSETS_COIN_HISTORY',
      payload: action.payload,
      loading: false,
    });
  }
}

function* AssetsDetail() {
  yield takeLatest('SET_COIN_DETAIL', setDataAssetDetail);
}

export default AssetsDetail;
