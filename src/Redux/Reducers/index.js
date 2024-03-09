// reducers.js

import {combineReducers} from 'redux';
import ChatReducer from './Chat';
import HomeReducer from './Home';
import NotifReducer from './Notif';
import PhoneCountryReducer from './PhoneCountry';
import AssetsReducers from './Assets';
import HistoryAssets from './DetailCoins';

const rootReducer = combineReducers({
  ChatReducer,
  HomeReducer,
  NotifReducer,
  PhoneCountryReducer,
  AssetsReducers,
  HistoryAssets,
  // Add other reducers here
});

export default rootReducer;
