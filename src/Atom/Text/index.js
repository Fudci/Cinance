import {Text as TextRN, useColorScheme} from 'react-native';
import React from 'react';
import {ColorsDark, ColorsLight} from '@helpers/Color';

const Text = ({children, color, size, fontFamily}) => {
  const isDarkMode = useColorScheme() == 'dark';

  return (
    <TextRN
      style={{
        fontSize: size ? size : 14,
        fontFamily: fontFamily == 'bold' ? 'Istok-Bold' : 'Istok-Regular',
        color: color
          ? color
          : isDarkMode
          ? ColorsDark.TEXT_MAIN
          : ColorsLight.TEXT_MAIN,
      }}>
      {children}
    </TextRN>
  );
};

export default Text;
