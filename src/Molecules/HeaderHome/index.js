import {View, Text} from 'react-native';
import React from 'react';
import {
  ChartBarIcon,
  SquaresPlusIcon,
  CubeIcon,
  WalletIcon,
  MagnifyingGlassIcon,
  QrCodeIcon,
  KeyIcon,
} from 'react-native-heroicons/solid';
import styles from './HeaderHome.styles';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <SquaresPlusIcon color={'grey'} />
      <View style={styles.row}>
        <MagnifyingGlassIcon color={'grey'} />
        <QrCodeIcon color={'grey'} />
        <KeyIcon color={'grey'} />
      </View>
    </View>
  );
};

export default HeaderHome;
