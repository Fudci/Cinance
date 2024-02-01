import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {FadeFromBottomAndroid} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const Function = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [erorEmail, setErorEmail] = useState(false);

  const ButtonNext = async () => {
    if (
      email.includes('@') ||
      (/^-?[0-9]+(?:\.[0-9]+)?$/.test(email) &&
        /^[0-9]{3,100}$/.test(email.replace(/[.-]/g, '')))
    ) {
      firestore()
        .collection('Users')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty) {
            navigation.navigate('PasswordPages', {email});
            console.log('This email is already taken!');
          } else {
            setErorEmail(false);
            console.log('name belum ada ');
          }
        });
    } else {
      setErorEmail(true);
    }
  };

  return {
    navigation,
    email,
    setEmail,
    erorEmail,
    setErorEmail,
    ButtonNext,
  };
};

export default Function;
