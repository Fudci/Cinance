import {Pressable, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import Text from '@atom/Text';
import TextInput from '@atom/TextInput';
import {XMarkIcon} from 'react-native-heroicons/solid';
import styles from './FormInput.styles';
import {ColorsDark} from '@helpers/Color';
import {ArrowDownTriangle, ArrowUpTriangle} from '@assets/svg';

const FormInputOptional = ({
  formName,
  valueForm,
  setValueForm,
  setValueActive,
}) => {
  const [activeTextInput, setactiveTextInput] = useState(false);
  const [active, setActive] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={styles.containerText}
          onPress={() => setactiveTextInput(!activeTextInput)}>
          <Text fontFamily={'bold'} color={ColorsDark.PRIMARY_TEXT}>
            {formName}
          </Text>
          {activeTextInput ? <ArrowUpTriangle /> : <ArrowDownTriangle />}
        </Pressable>
        {activeTextInput && (
          <View style={styles.containerPhoneCountry(isDarkMode)}>
            <TextInput
              // erorActive={erorActive}
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
        )}
      </View>
    </View>
  );
};

export default FormInputOptional;
