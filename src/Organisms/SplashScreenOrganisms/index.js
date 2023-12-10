import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import Images from '@helpers/Images';
import styles from './splashscreen.style';
import {useMMKVString} from 'react-native-mmkv';
import {useNavigation} from '@react-navigation/native';
import Container from '@molecules/Container/Container';

const SplashScreen = () => {
  const [userChoice, setUserChoice] = useMMKVString('@userChoice');
  const navigation = useNavigation();

  useEffect(() => {
    console.log(userChoice);
    if (userChoice) {
      console.log('user has choice');
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
