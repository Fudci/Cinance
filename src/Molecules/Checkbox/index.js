import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './Checkbox.styles';
import {CheckIcon} from 'react-native-heroicons/solid';

const Checkbox = ({check, setValue}) => {
  return (
    <Pressable onPress={() => setValue(!check)} style={styles.container}>
      <CheckIcon size={14} color={check ? 'pink' : null} />
    </Pressable>
  );
};

export default Checkbox;
