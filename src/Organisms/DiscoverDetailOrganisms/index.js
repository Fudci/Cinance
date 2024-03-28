import {
  View,
  useColorScheme,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
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
import CommnetDiscoverDetail from '@molecules/CommentDiscoverDetail';

const DiscoverDetailOrganisms = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const data = [1, 2, 3, 4];
  const [isScroll, setisScroll] = useState(false);

  const onScroll = event => {
    if (event.nativeEvent.contentOffset.y > 100) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  };

  return (
    <>
      <Container style={styles.container}>
        <View style={styles.wrapper}>
          <Header detailDiscover />
        </View>
        <ScrollView onScroll={onScroll} contentContainerStyle={styles.body}>
          <View style={styles.wrapperContent}>
            <HeaderDiscover item={route?.image} />
          </View>
          <View style={styles.wrapperContent}>
            <Text size={16}>{route?.image.description}</Text>
            <View>
              <Image
                source={{uri: route?.image?.attachements}}
                style={{width: '100%', height: 400}}
              />
            </View>
            <Text>
              <Text size={11} color={ColorsDark.TEXT_INACTIVE}>
                Disclaimer: Inculdes third-party options.No financial advice.
              </Text>
              <Text size={11} color={ColorsDark.PRIMARY_BUTTON}>
                See T&Cs.
              </Text>
            </Text>
          </View>
          <View style={styles.wrapperCount}>
            <View style={styles.countItem}>
              <Text fontFamily={'bold'}>8.2</Text>
              <Text color={ColorsDark.TEXT_INACTIVE}>Views</Text>
            </View>
            <View style={styles.countItem}>
              <Text>8</Text>
              <Text color={ColorsDark.TEXT_INACTIVE}>Likes</Text>
            </View>
            <View style={styles.countItem}>
              <Text>0</Text>
              <Text color={ColorsDark.TEXT_INACTIVE}>Quotes</Text>
            </View>
            <View style={styles.countItem}>
              <Text>3</Text>
              <Text color={ColorsDark.TEXT_INACTIVE}>Shares</Text>
            </View>
          </View>
          <View style={styles.wrapperContent}>
            <CommnetDiscoverDetail />
          </View>
        </ScrollView>
      </Container>
      <FooterDetailDiscover isScroll={isScroll} />
    </>
  );
};

export default DiscoverDetailOrganisms;
