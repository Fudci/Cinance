// sagas.js

import {all} from 'redux-saga/effects';
import ChatAction from './ChatAction';
import HomeAction from './HomeAction';
import NotifAction from './NotifAction';
import PhoneCountryAction from './PhoneCountry';
import AssetsCoinAction from './AssetsCoinAction';
import AssetHistoryAction from './AssetHistoryAction';

function* rootSaga() {
  yield all([
    ChatAction(),
    HomeAction(),
    NotifAction(),
    PhoneCountryAction(),
    AssetsCoinAction(),
    AssetHistoryAction(),
    // Add other sagas here
  ]);
}

export default rootSaga;
