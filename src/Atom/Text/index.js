import {Text as TextRN, useColorScheme} from 'react-native';
import React from 'react';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import DarkMode from '@helpers/DarkMode';

const Text = ({
  children,
  color,
  size,
  fontFamily,
  center,
  lineHeight,
  active = false,
  valueActive,
  nameValue,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const StatusColor = () => {
    if (isDarkMode && valueActive === nameValue) {
      return ColorsDark.TEXT_MAIN;
    }
    if (isDarkMode && valueActive !== nameValue) {
      return ColorsDark.TEXT_INACTIVE;
    }
    if (!isDarkMode && valueActive === nameValue) {
      return ColorsLight.TEXT_MAIN;
    }
    if (!isDarkMode && valueActive !== nameValue) {
      return ColorsDark.TEXT_INACTIVE;
    }
  };

  if (active) {
    return (
      <TextRN
        style={{
          lineHeight: lineHeight,
          fontSize: size ? size : 14,
          fontFamily: fontFamily == 'bold' ? 'Istok-Bold' : 'Istok-Regular',
          textAlign: center,
          color: StatusColor(),
        }}>
        {children}
      </TextRN>
    );
  }

  return (
    <TextRN
      style={{
        lineHeight: lineHeight,
        fontSize: size ? size : 14,
        fontFamily: fontFamily == 'bold' ? 'Istok-Bold' : 'Istok-Regular',
        textAlign: center,
        color: color
          ? color
          : DarkMode()
          ? ColorsDark.TEXT_MAIN
          : ColorsLight.TEXT_MAIN,
      }}>
      {children}
    </TextRN>
  );
};

export default Text;
