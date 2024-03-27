import React, {useEffect} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import IntroPages from '@pages/IntroPages';
import SplashScreenPages from '@pages/SplashScreenPages';
import SingUpPages from '@pages/SignUpPages';
import DashboardLoginSignUp from '@pages/DashboardLoginSignupPages';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import PhoneVerificationPages from '@pages/PhoneVerificationPages';
import SetUpPasswordPages from '@pages/SetUpPasswordPages';
import BottomTabs from './BottomNavigators';
import DetailMarketPages from '@pages/DetailMarketPages';
import LoginPages from '@pages/LoginPages';
import PasswordPages from '@pages/PasswordPages';
import DetailDiscoverPages from '@pages/CoinMarketsPages';
import DiscoverDetailOrganismsNext from '@organisms/DiscoverDetailNext';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  const getVersion = async () => {
    const version = firestore().collection('versions').doc('version').get();
    const users = await firestore().collection('versions').get();
    const FirebaseVersion = users.docs[0]._data.version;
    if (DeviceInfo.getVersion() < FirebaseVersion) {
      Alert.alert('Update APP Please');
    }
    console.log(version);
    console.log(DeviceInfo.getVersion(), 'version app');
  };

  useEffect(() => {
    // FindData();
    getVersion();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreenPages} />
      <Stack.Screen name="BootomTabPages" component={BottomTabs} />
      <Stack.Screen name="IntroPages" component={IntroPages} />
      <Stack.Screen name="SignUpPages" component={SingUpPages} />
      <Stack.Screen
        name="DashboardLoginSignUpPages"
        component={DashboardLoginSignUp}
      />
      <Stack.Screen
        name="PhoneVerificationPages"
        component={PhoneVerificationPages}
      />
      <Stack.Screen name="SetUpPasswordPages" component={SetUpPasswordPages} />
      <Stack.Screen name="DetailMarketsPages" component={DetailMarketPages} />
      <Stack.Screen name="LoginPages" component={LoginPages} />
      <Stack.Screen name="PasswordPages" component={PasswordPages} />
      <Stack.Screen name="DetailDiscover" component={DetailDiscoverPages} />
      <Stack.Screen
        name="DetailDiscoverNext"
        component={DiscoverDetailOrganismsNext}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
