import {ActivityIndicator, Pressable, View} from 'react-native';
import React from 'react';
import Text from '@atom/Text';
import {ColorsDark} from '@helpers/Color';
import {pixelSizeVertical} from '@helpers/Responsive';

const ButtonCustom = ({title, onPress, disabled}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderRadius: 4,
        paddingVertical: pixelSizeVertical(15),
        justifyContent: 'center',
        backgroundColor: ColorsDark.PRIMARY_BUTTON,
      }}>
      {disabled ? (
        <ActivityIndicator size={20} color={'#717A8A'} />
      ) : (
        <Text color={'black'}>{title}</Text>
      )}
    </Pressable>
  );
};

export default ButtonCustom;
