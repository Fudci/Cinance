import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import {ArrowLeftIcon, PhoneIcon} from 'react-native-heroicons/solid';
import {ColorsDark} from '@helpers/Color';
import {useNavigation} from '@react-navigation/native';
import RemixIcon from 'react-native-remix-icon';

const Header = ({leftIcon = false, detailDiscover = false}) => {
  const navigation = useNavigation();

  if (detailDiscover) {
    return (
      <View style={styles.containerDiscover}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={ColorsDark.PRIMARY_DISABLED} />
        </Pressable>
        <View style={styles.row}>
          <Pressable onPress={() => console.log('press translate')}>
            <RemixIcon
              name="ri-translate"
              size={20}
              color={ColorsDark.PRIMARY_CURSOR}
            />
          </Pressable>
          <RemixIcon
            name="ri-more-line"
            size={20}
            color={ColorsDark.PRIMARY_DISABLED}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeftIcon color={ColorsDark.PRIMARY_DISABLED} />
      </Pressable>
      {leftIcon && <PhoneIcon color={ColorsDark.PRIMARY_DISABLED} />}
    </View>
  );
};

export default Header;
