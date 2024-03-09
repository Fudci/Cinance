import {View, Text, FlatList, Dimensions, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IconAssets} from '@helpers/IconCoins';
import LinearGradient from 'react-native-linear-gradient';
import {ColorsDark} from '@helpers/Color';
import FastImage from 'react-native-fast-image';
import {PriceUsd} from '@helpers/PriceUsd';
import styles from './HeaderHighlight.styles';

const HeaderHighligth = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);
  const AssetsCoin = useSelector(state => state.AssetsReducers.Assets);
  const handleScroll = event => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / totalWidth);
    setCurrentIndex(current);
  };
  return (
    <View>
      <FlatList
        onScroll={event => handleScroll(event)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.flatlist}
        horizontal
        data={AssetsCoin.slice(0, 3)}
        renderItem={({item, index}) => {
          const IconURL = IconAssets.filter(el => {
            return el.name === item.symbol;
          });
          return (
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 1, y: 0.8}}
              colors={['rgba(252, 212, 52,0.1)', 'rgba(0, 0, 0,0.1)']}
              style={styles.liniearGrad}>
              <View style={styles.rowTop}>
                <FastImage
                  style={styles.image}
                  source={{
                    uri: IconURL[0]?.url,
                  }}
                />
                <Text size={20}>{item.name}</Text>
              </View>
              <View>
                <Text size={12}>Last Price</Text>
                <Text>$ {PriceUsd(item?.priceUsd)}</Text>
              </View>
            </LinearGradient>
          );
        }}
      />
      <View style={styles.indicatorCont}>
        {AssetsCoin.slice(0, 3).map((item, index) => {
          return (
            <View key={index} style={styles.indicator(index, currentIndex)} />
          );
        })}
      </View>
    </View>
  );
};

export default HeaderHighligth;
