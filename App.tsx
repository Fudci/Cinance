import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '@navigators/Stack';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
  );
};

export default App;
