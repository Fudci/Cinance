import {View, Text, useColorScheme} from 'react-native';
import React from 'react';

const DarkMode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return isDarkMode;
};

export default DarkMode;
