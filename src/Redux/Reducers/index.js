// reducers.js

import {combineReducers} from 'redux';
import ChatReducer from './Chat';
import HomeReducer from './Home';
import NotifReducer from './Notif';
import PhoneCountryReducer from './PhoneCountry';
import AssetsReducers from './Assets';

const rootReducer = combineReducers({
  ChatReducer,
  HomeReducer,
  NotifReducer,
  PhoneCountryReducer,
  AssetsReducers,
  // Add other reducers here
});

export default rootReducer;
