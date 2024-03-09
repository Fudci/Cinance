import {Pressable} from 'react-native';
import React from 'react';

const Button = ({onPress, children, style}) => {
  return (
    <Pressable style={[style, {borderRadius: 10}]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;
