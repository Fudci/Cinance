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

const LoginOrganisms = () => {
  const {navigation, email, setEmail, erorEmail, ButtonNext, setErorEmail} =
    Function();
  const isDarkMode = useColorScheme() === 'dark';
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
        <Text fontFamily={'bold'} size={24}>
          Log In
        </Text>
        <FormInputRegular
          formName={'Email / Phone Number'}
          valueForm={email}
          setValueForm={setEmail}
          errorInput={erorEmail}
          setError={setErorEmail}
        />
        {erorEmail && (
          <Text lineHeight={20} color={'#A42f25'}>
            Please enter a valid email.
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

export default LoginOrganisms;
