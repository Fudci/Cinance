import {Pressable, View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '@atom/Text';
import TextInput from '@atom/TextInput';
import {XMarkIcon} from 'react-native-heroicons/solid';
import styles from './FormInput.styles';
import {ColorsDark} from '@helpers/Color';
import {ArrowDownTriangle} from '@assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {NumberMore3} from '@helpers/FunctionDetectNumber';

const FormInputEmailPhone = ({
  formName,
  valueForm,
  setValueForm,
  setModalActive,
  errorInput,
}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [erorActive, seterorActive] = useState(false);
  const [phoneActive, setphoneActive] = useState();
  const CountryPhone = useSelector(
    state => state.PhoneCountryReducer.countryPhone,
  );

  useEffect(() => {
    if (errorInput) {
      seterorActive(errorInput);
    } else {
      seterorActive(false);
    }
  }, [errorInput]);

  useEffect(() => {
    dispatch({type: 'DELETE_PHONE_COUNTRY_ACTION'});
  }, []);

  useEffect(() => {
    NumberMore3(setphoneActive, valueForm);
  }, [valueForm]);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <View style={styles.container}>
        <Text fontFamily={'bold'} color={ColorsDark.PRIMARY_TEXT}>
          {formName}
        </Text>
        <View style={styles.containerPhoneCountry(isDarkMode, erorActive)}>
          {phoneActive && (
            <Pressable
              onPress={() => setModalActive(true)}
              style={styles.sectoinPhoneCountry}>
              <Text>{CountryPhone?.emoji}</Text>
              <Text>{CountryPhone?.dial_code}</Text>
              <ArrowDownTriangle />
            </Pressable>
          )}
          <TextInput
            erorActive={erorActive}
            setActiveTextinput={setActive}
            style={styles.containerTextinput}
            value={valueForm}
            setvalueText={setValueForm}
          />
          {active && valueForm?.length > 0 && (
            <Pressable
              onPress={() => setValueForm('')}
              style={styles.sectionMarkX}>
              <XMarkIcon color={isDarkMode ? 'white' : 'black'} size={20} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default FormInputEmailPhone;
