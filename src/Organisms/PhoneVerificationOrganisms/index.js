import {View} from 'react-native';
import React from 'react';
import styles from './PhoneVerificationOrganisms.style';
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

const PhoneVerificationOrganisms = () => {
  const {
    errorCheck,
    Email,
    ReferalId,
    valueSearch,
    modalActivePhone,
    valueCheck,
    errorValueEmpty,
    valueCountry,
    setEmail,
    setReferalId,
    setvalueCheck,
    setValueSearch,
    setModalActivePhone,
    setvalueCountry,
    ButtonNext,
  } = Function();

  return (
    <Container style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text fontFamily={'bold'} size={24}>
          Phone Verification
        </Text>
        <Text lineHeight={20} color={ColorsDark.PRIMARY_TEXT}>
          Please enter the 6-digit verification code sent to +62. The code is
          valid for 30 minutes.
        </Text>
        <FormInputEmailPhone
          valuePassing={valueCountry}
          setModalActive={setModalActivePhone}
          formName={'Phone Number Verification Code'}
          valueForm={Email}
          setValueForm={setEmail}
        />
        <ButtonCustom title={'Submit'} onPress={ButtonNext} />
      </View>
    </Container>
  );
};

export default PhoneVerificationOrganisms;
