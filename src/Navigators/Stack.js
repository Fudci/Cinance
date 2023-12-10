import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import IntroPages from '@pages/IntroPages';
import SplashScreenPages from '@pages/SplashScreenPages';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreenPages} />

      <Stack.Screen name="IntroPages" component={IntroPages} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
