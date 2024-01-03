import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import Images from '@helpers/Images';
import styles from './splashscreen.style';
import {useMMKVString} from 'react-native-mmkv';
import {useNavigation} from '@react-navigation/native';
import Container from '@molecules/Container/Container';
import firestore from '@react-native-firebase/firestore';

const SplashScreen = () => {
  const [userChoice, setUserChoice] = useMMKVString('@userChoice');
  const navigation = useNavigation();
  const [email, setEmail] = useMMKVString('@email');
  const [password, setPassword] = useMMKVString('@password');

  useEffect(() => {
    if (email && password) {
      console.log('user has choice');
      navigation.replace('BootomTabPages');
    } else {
      navigation.replace('IntroPages');
    }
  }, []);

  return (
    <Container style={styles.container}>
      <FastImage
        resizeMode="contain"
        source={Images.ICONSPLASHSCREEN}
        style={{width: 100, height: 100, marginTop: 20}}
      />
    </Container>
  );
};

export default SplashScreen;
