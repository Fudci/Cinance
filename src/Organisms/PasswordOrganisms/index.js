import {View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Login.styles';
import Container from '@molecules/Container/Container';
import Button from '@atom/Button';
import {XMarkIcon} from 'react-native-heroicons/solid';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import Text from '@atom/Text';
import ButtonCustom from '@molecules/ButtonCustom';
import Function from './function';
import FormInputRegular from '@molecules/FormInputRegular';
import Header from '@molecules/Header';
import FormInputPassword from '@molecules/FormInputPassword';

const PasswordOrganisms = ({passingEmail}) => {
  const {
    navigation,
    password,
    setPassword,
    erorEmail,
    ButtonNext,
    setErorEmail,
    errorPassword,
    setErrorPassword,
  } = Function(passingEmail);
  const isDarkMode = useColorScheme() === 'dark';
  const newStr = '*****' + passingEmail.email?.substr(5);

  return (
    <Container style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text fontFamily={'bold'} size={24}>
          Welcome back!
        </Text>
        <Text fontFamily={'bold'} size={24}>
          {newStr}
        </Text>
        <FormInputPassword
          formName={'Email / Phone Number'}
          valueForm={password}
          setValueForm={setPassword}
          errorInput={erorEmail}
          setError={setErorEmail}
        />
        {errorPassword && (
          <Text lineHeight={20} color={'#A42f25'}>
            Incorrect password, Please retry or click "Forgot Password" to
            reset. You have 3 more chance left.
          </Text>
        )}
        <ButtonCustom onPress={ButtonNext} title={'Next'} />
        <Text
          color={ColorsLight.PRIMARY_BUTTON}
          fontFamily={'regular'}
          size={14}>
          Create a Cinance Account
        </Text>
      </View>
    </Container>
  );
};

export default PasswordOrganisms;
