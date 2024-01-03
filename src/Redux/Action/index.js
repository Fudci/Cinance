// sagas.js

import {all} from 'redux-saga/effects';
import ChatAction from './ChatAction';
import HomeAction from './HomeAction';
import NotifAction from './NotifAction';
import PhoneCountryAction from './PhoneCountry';
import AssetsCoinAction from './AssetsCoinAction';

function* rootSaga() {
  yield all([
    ChatAction(),
    HomeAction(),
    NotifAction(),
    PhoneCountryAction(),
    AssetsCoinAction(),
    // Add other sagas here
  ]);
}

export default rootSaga;
