import {Pressable, View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '@atom/Text';
import TextInput from '@atom/TextInput';
import {XMarkIcon, EyeIcon} from 'react-native-heroicons/solid';
import styles from './FormInputPassword.styles';
import {ColorsDark} from '@helpers/Color';
import {useDispatch, useSelector} from 'react-redux';

const FormInputPassword = ({formName, valueForm, setValueForm}) => {
  const [active, setActive] = useState(false);
  const [erorActive, seterorActive] = useState(0);
  const [secureTextEntry, setsecureTextEntry] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <View style={styles.container}>
        <Text fontFamily={'bold'} color={ColorsDark.PRIMARY_TEXT}>
          {formName}
        </Text>
        <View style={styles.containerPhoneCountry(isDarkMode)}>
          <TextInput
            secureTextEntry={secureTextEntry}
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
          {valueForm?.length > 0 && (
            <Pressable
              onPress={() => setsecureTextEntry(!secureTextEntry)}
              style={styles.sectionMarkX}>
              <EyeIcon color={isDarkMode ? 'white' : 'black'} size={20} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default FormInputPassword;
