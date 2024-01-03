import {put, takeLatest} from 'redux-saga/effects';

function* setDataPhoneCountry(action) {
  try {
    yield put({
      type: 'SET_DATA_COUNTRY_PHONE',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error, 'erpr ;ist');
  }
}

function* deleteDataPhoneCountry(action) {
  try {
    yield put({
      type: 'CLEAR_DATA_COUNTRY_PHONE',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error, 'erpr ;ist');
  }
}

function* PhoneCountryAction() {
  yield takeLatest('SET_PHONE_COUNTRY_ACTION', setDataPhoneCountry);
  yield takeLatest('DELETE_PHONE_COUNTRY_ACTION', deleteDataPhoneCountry);
}

export default PhoneCountryAction;
