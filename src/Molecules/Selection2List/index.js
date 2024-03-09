import {View, Text, Pressable, useColorScheme} from 'react-native';
import React from 'react';
import styles from './Selection2List.styles';

const Selection2List = ({setValue, value}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonItem(value, isDarkMode)}
        onPress={() => setValue(false)}>
        <Text size={18}>Watchlist</Text>
      </Pressable>
      <Pressable
        style={styles.buttonItem(!value, isDarkMode)}
        onPress={() => setValue(true)}>
        <Text size={18}>Coin</Text>
      </Pressable>
    </View>
  );
};

export default Selection2List;
