import {View, useColorScheme, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import styles from './DiscoverDetailOrganisms.styles';
import Container from '@molecules/Container/Container';
import Button from '@atom/Button';
import {UserIcon, XMarkIcon} from 'react-native-heroicons/solid';
import FastImage from 'react-native-fast-image';
import {GoogleSvg} from '@assets/svg';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import {useNavigation} from '@react-navigation/native';
import Images from '@helpers/Images';
import Text from '@atom/Text';
import Animated from 'react-native-reanimated';
import Header from '@molecules/Header';
import HeaderDiscover from '@molecules/HeaderDiscover';
import FooterDetailDiscover from '@molecules/FooterDetailDiscover';

const DiscoverDetailOrganisms = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  console.log(route?.image, 'sss');
  return (
    <>
      <Container style={styles.container}>
        <Header detailDiscover />
        <ScrollView contentContainerStyle={styles.body}>
          <HeaderDiscover item={route?.image} />
          <Text size={20}>{route?.image.description}</Text>
          <View>
            <Image
              sharedTransitionTag={`image1`}
              source={{uri: route?.image?.attachements}}
              style={{width: '100%', height: 400}}
            />
          </View>
        </ScrollView>
      </Container>
      <FooterDetailDiscover />

    </>
  );
};

export default DiscoverDetailOrganisms;
