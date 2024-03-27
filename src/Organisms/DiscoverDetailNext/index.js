import {View, useColorScheme, Image, Pressable} from 'react-native';
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

const DiscoverDetailOrganismsNext = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  console.log(props?.route?.params?.image, 'sss');
  return (
    <Container style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate('DetailDiscover', {
            image: props?.route?.params?.image,
          })
        }>
        <Animated.View sharedTransitionTag={`image1`}>
          <Animated.Image
            sharedTransitionTag={`image1`}
            source={{uri: props?.route?.params?.image}}
            style={{width: '100%', height: 500}}
          />
        </Animated.View>
      </Pressable>
    </Container>
  );
};

export default DiscoverDetailOrganismsNext;
