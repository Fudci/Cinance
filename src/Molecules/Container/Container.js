import {View, StatusBar, SafeAreaView, useColorScheme} from 'react-native';
import React from 'react';
import styles from './Container.styles';

const Container = ({children, style}) => {
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <View style={[styles.body(isDarkMode), style]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default Container;
