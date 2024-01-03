import {View} from 'react-native';
import React from 'react';
import styles from './setUpPaswwrodOrganisms.style';
import Text from '@atom/Text';
import Container from '@molecules/Container/Container';
import ModalCustom from '@molecules/ModalCustom';
import Header from '@molecules/Header';
import ButtonCustom from '@molecules/ButtonCustom';
import {ColorsDark} from '@helpers/Color';
import FormInputOptional from '@molecules/FormInputOptional';
import FormInputEmailPhone from '@molecules/FormInputEmailPhone';
import Function from './fucntion';
import Checkbox from '@molecules/Checkbox';
import FormInputPassword from '@molecules/FormInputPassword';
import {CheckIcon} from 'react-native-heroicons/solid';

const SetUpPasswordOrganisms = Email => {
  const {
    errorCheck,
    Password,
    setPassword,
    valueCountry,
    has1Num,
    has8Char,
    hasUpperCase,
    setEmail,
    setModalActivePhone,
    ButtonNext,
    isLoading,
  } = Function(Email);

  return (
    <Container style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text fontFamily={'bold'} size={24}>
          Set Password
        </Text>
        <FormInputPassword
          valuePassing={valueCountry}
          setModalActive={setModalActivePhone}
          formName={'Password'}
          valueForm={Password}
          setValueForm={setPassword}
        />
        <View style={styles.rowCheck}>
          <CheckIcon color={has8Char ? '#30BAB5' : '#424B5A'} size={20} />
          <Text lineHeight={21} color={ColorsDark.PRIMARY_TEXT}>
            At least 8 chracters
          </Text>
        </View>
        <View style={styles.rowCheck}>
          <CheckIcon color={has1Num ? '#30BAB5' : '#424B5A'} size={20} />
          <Text lineHeight={21} color={ColorsDark.PRIMARY_TEXT}>
            At least 1 number
          </Text>
        </View>
        <View style={styles.rowCheck}>
          <CheckIcon color={hasUpperCase ? '#30BAB5' : '#424B5A'} size={20} />
          <Text lineHeight={21} color={ColorsDark.PRIMARY_TEXT}>
            At least 1 upper case letter
          </Text>
        </View>
        {errorCheck && (
          <Text color={'#A42f25'}>
            You need to accept our temers and privacy policy to create an
            account.
          </Text>
        )}
        <ButtonCustom
          disabled={isLoading}
          onPress={ButtonNext}
          title={'Next'}
        />
      </View>
    </Container>
  );
};

export default SetUpPasswordOrganisms;
