import {View, StatusBar, SafeAreaView, useColorScheme} from 'react-native';
import React from 'react';
import styles from './Container.styles';
import DarkMode from '@helpers/DarkMode';

const Container = ({children, style}) => {
  return (
    <View style={[styles.container(DarkMode()), style]}>
      <StatusBar
        barStyle={DarkMode() ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default Container;
