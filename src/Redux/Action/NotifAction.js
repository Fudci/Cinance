import {put, takeEvery} from 'redux-saga/effects';
import {GET_NOTIF_LIST} from '@Services/Notif';

function* fetchSomeDataSaga(action) {
  try {
    console.log('tes');
    // const data = yield GET_NOTIF_LIST(action.token, action.status);
    // if (data) {
    //   yield put({
    //     type: 'NOTIF_SUCCESS',
    //     payload: data.response,
    //   });
    // }
  } catch (error) {
    console.log(error, 'erpr ;ist');
    yield yield put({
      type: 'NOTIF_FAILED',
      payload: null,
    });
  }
}

function* isReadDataSaga(action) {
  try {
    yield put({
      type: 'NOTIF_SUCCESS',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error, 'erpr ;ist');
  }
}

function* NotifAction() {
  yield takeEvery('GET_NOTIF_LIST', fetchSomeDataSaga);
  yield takeEvery('ISREAD_NOTIF', isReadDataSaga);
}

export default NotifAction;
