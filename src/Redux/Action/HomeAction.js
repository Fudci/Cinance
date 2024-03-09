import {put, takeEvery} from 'redux-saga/effects';

function* fetchSomeDataSaga(action) {
  try {
    console.log('tes');
    // const data = yield GET_HOME_SYNC(action.token);
    // if (data) {
    //   yield put({
    //     type: 'HOME_SUCCESS',
    //     payload: data.response,
    //   });
    // }
  } catch (error) {
    yield yield put({
      type: 'HOME_FAILED',
      payload: null,
    });
  }
}

function* HomeAction() {
  yield takeEvery('GET_HOME_SYNCHRONIZE', fetchSomeDataSaga);
}

export default HomeAction;
