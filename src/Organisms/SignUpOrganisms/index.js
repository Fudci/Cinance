import {View} from 'react-native';
import React from 'react';
import styles from './SignUpOrganisms.style';
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

const SignUpOrganisms = () => {
  const {
    errorCheck,
    Email,
    ReferalId,
    valueSearch,
    modalActivePhone,
    valueCheck,
    valueCountry,
    errorValueEmpty,
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
          Create Personal Account
        </Text>
        <FormInputEmailPhone
          setModalActive={setModalActivePhone}
          formName={'Email / Phone Number'}
          valueForm={Email}
          setValueForm={setEmail}
          errorInput={errorValueEmpty}
        />
        {errorValueEmpty && (
          <Text lineHeight={20} color={'#A42f25'}>
            Please enter a valid email or phone number.Spaces or special
            characters are not allowed for phone numbers.
          </Text>
        )}
        <FormInputOptional
          formName={'Referal ID (Optional)'}
          valueForm={ReferalId}
          setValueForm={setReferalId}
        />
        <View style={styles.rowCheck}>
          <View style={styles.sectionCheck}>
            <Checkbox check={valueCheck} setValue={setvalueCheck} />
          </View>
          <Text lineHeight={21} color={ColorsDark.PRIMARY_TEXT}>
            By creating an account, i agree to Binance's
            <Text color={'white'}> Terms of Service</Text>
            <Text color={'white'}>Terms of Service</Text>
          </Text>
        </View>
        {errorCheck && (
          <Text color={'#A42f25'}>
            You need to accept our temers and privacy policy to create an
            account.
          </Text>
        )}
        <ButtonCustom onPress={ButtonNext} title={'Next'} />
        <Text lineHeight={20} color={ColorsDark.PRIMARY_TEXT}>
          Not Looking for personal account?
          <Text> Sign up for an entitiy account</Text>
        </Text>
      </View>
      <ModalCustom
        valuePassPhone={valueCountry}
        setValuePassing={setvalueCountry}
        type={'Modal-Phone-Number-Religion'}
        visible={modalActivePhone}
        valueForm={valueSearch}
        setValueForm={setValueSearch}
        setVisible={setModalActivePhone}
      />
    </Container>
  );
};

export default SignUpOrganisms;
