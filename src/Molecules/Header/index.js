import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import {
  ArrowDownIcon,
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ArrowLongDownIcon,
  ArrowUturnLeftIcon,
  ArrowsRightLeftIcon,
  PhoneIcon,
} from 'react-native-heroicons/solid';
import {ColorsDark} from '@helpers/Color';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeftIcon color={ColorsDark.PRIMARY_DISABLED} />
      </Pressable>
      <PhoneIcon color={ColorsDark.PRIMARY_DISABLED} />
    </View>
  );
};

export default Header;
