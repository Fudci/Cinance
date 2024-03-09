import {View, useColorScheme} from 'react-native';
import React from 'react';
import styles from './DashboardLoginSingup.styles';
import Container from '@molecules/Container/Container';
import Button from '@atom/Button';
import {UserIcon, XMarkIcon} from 'react-native-heroicons/solid';
import FastImage from 'react-native-fast-image';
import {GoogleSvg} from '@assets/svg';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import {useNavigation} from '@react-navigation/native';
import Images from '@helpers/Images';
import Text from '@atom/Text';

const DahsboarLoginSingupOrgamisms = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <View style={styles.body}>
        <Button style={styles.buttonClose} onPress={() => navigation.goBack()}>
          <XMarkIcon
            size={30}
            color={
              isDarkMode ? ColorsLight.PRIMARY_MAIN : ColorsDark.PRIMARY_MAIN
            }
          />
        </Button>
        <FastImage
          resizeMode="contain"
          source={Images.CRYPTOBG}
          style={styles.imageCyrpto}
        />
        <Text fontFamily={'bold'} size={24}>
          Sign up to get 100 USDT trading free rebate!{' '}
        </Text>
        <Button
          style={styles.buttonSignUp}
          onPress={() => {
            navigation.navigate('SignUpPages');
          }}>
          <View style={styles.leftIcon}>
            <UserIcon color={'black'} size={30} />
          </View>
          <Text
            center={'center'}
            size={16}
            color={
              isDarkMode ? ColorsDark.PRIMARY_MAIN : ColorsLight.PRIMARY_MAIN
            }>
            Sign Up With Email or Phone
          </Text>
        </Button>
        <View style={styles.wrapperOr}>
          <View style={styles.line} />
          <Text>or</Text>
          <View style={styles.line} />
        </View>
        {/* <Button style={styles.buttonSignUp} onPress={() => console.log('tes')}>
          <View style={styles.leftIcon}>
            <GoogleSvg />
          </View>
          <Text
            center={'center'}
            size={16}
            color={
              isDarkMode ? ColorsDark.PRIMARY_MAIN : ColorsLight.PRIMARY_MAIN
            }>
            Continue with Google
          </Text>
        </Button> */}
        <Button style={styles.wrapperRow} onPress={() => console.log('tes')}>
          <Text>Already have an account?</Text>
          <Text color={ColorsDark.PRIMARY_BUTTON}>Log In</Text>
        </Button>
        <Button style={styles.wrapperRow} onPress={() => console.log('tes')}>
          <Text>Need an entity account</Text>
          <Text color={ColorsDark.PRIMARY_BUTTON}>Sign Up</Text>
        </Button>
      </View>
    </Container>
  );
};

export default DahsboarLoginSingupOrgamisms;
