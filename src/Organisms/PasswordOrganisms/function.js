import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {FadeFromBottomAndroid} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import {storage} from '@helpers/Storage';
import * as Sentry from '@sentry/react-native';

const Function = Email => {
  console.log(Email, 'function hook');
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [erorEmail, setErorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const ButtonNext = async () => {
    if (password && Email.email) {
      const FindUser = await firestore().collection('Users').get();
      FindUser.docs.find(el => {
        if (el._data.email === Email.email && el._data.password === password) {
          storage.set('@email', Email.email.toString());
          storage.set('@password', password);
          navigation.replace('BootomTabPages');
        } else {
          setErrorPassword(true);
          const error = {
            error: el,
            Email: Email.email,
            password : password,
          };
          Sentry.captureMessage(error);
          console.log(' user di temukan dan pass sama');
        }
      });
    } else {
      setErorEmail(true);
    }
  };

  return {
    setErrorPassword,
    errorPassword,
    navigation,
    password,
    setPassword,
    erorEmail,
    setErorEmail,
    ButtonNext,
  };
};

export default Function;
