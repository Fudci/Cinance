import {takeLatest} from 'redux-saga/effects';

function* fetchSomeDataSaga(action) {
  try {
    console.log('tes');
    // const data = yield SEND_PERSONAL_CHAT();
    // if (data) {
    //   console.log(data);
    // }
  } catch (error) {
    yield error;
  }
}

function* ChatAction() {
  yield takeLatest('FETCH_SOME_DATA_REQUEST', fetchSomeDataSaga);
}

export default ChatAction;
