import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '@navigators/Stack';
import Main from '@pages/Main';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
