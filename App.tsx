import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@navigators/Stack';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import * as Sentry from "@sentry/react-native";


Sentry.init({
  dsn: "https://03129fd4c84081672282301aa0966209@o4506959141863424.ingest.us.sentry.io/4506959143305216",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.

  tracesSampleRate: 1.0,
});



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default Sentry.wrap(App);
