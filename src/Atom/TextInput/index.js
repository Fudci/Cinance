import {TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import DarkMode from '@helpers/DarkMode';

const TextInput = ({
  children,
  color,
  size,
  fontFamily,
  center,
  value,
  setvalueText,
  setActiveTextinput,
  erorActive,
  paddingLeft,
  secureTextEntry = false,
  placeholder,
  style,
}) => {
  return (
    <TextInputRN
      placeholder={placeholder}
      secureTextEntry={secureTextEntry ? true : false}
      onBlur={() => setActiveTextinput(false)}
      onFocus={() => setActiveTextinput(true)}
      cursorColor={'#F1B90C'}
      value={value}
      onChangeText={e => setvalueText(e)}
      style={[
        {
          // borderWidth: erorActive,
          borderColor: 'red',
          paddingLeft: paddingLeft ? paddingLeft : 10,
          backgroundColor: DarkMode()
            ? ColorsDark.TEXTINPUT_MAIN
            : ColorsLight.TEXTINPUT_MAIN,
          fontSize: size ? size : 14,
          fontFamily: fontFamily == 'bold' ? 'Istok-Bold' : 'Istok-Regular',
          textAlign: center,
          color: DarkMode() ? ColorsDark.TEXT_MAIN : ColorsLight.TEXT_MAIN,
          flex: 1,
        },
        style,
      ]}
    />
  );
};

export default TextInput;
