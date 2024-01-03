import {
  Dimensions,
  FlatList,
  LogBox,
  Pressable,
  ScrollView,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './DashboardLoginSingup.styles';
import Container from '@molecules/Container/Container';
import {ColorsDark} from '@helpers/Color';
import Text from '@atom/Text';
import {useSelector, useDispatch} from 'react-redux';
import SelectionFilterHome from '@molecules/SelectionFilterHome';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CardCoinHome from '@molecules/CardCoinHome';
import HeaderHome from '@molecules/HeaderHome';
import {Precentage24} from '@helpers/GetColorIcon';
import FastImage from 'react-native-fast-image';
import {IconAssets} from '@helpers/IconCoins';
import LinearGradient from 'react-native-linear-gradient';
import {PriceUsd} from '@helpers/PriceUsd';

const HomeOrganisms = () => {
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('hot');
  const [selectButton, setSelectButton] = useState(true);
  const AssetsCoin = useSelector(state => state.AssetsReducers.Assets);
  const MarketCoin = useSelector(state => state.AssetsReducers.Markets);
  const PriceLowCoin = useSelector(state => state.AssetsReducers.PriceLow);
  const PriceHighCoin = useSelector(state => state.AssetsReducers.PriceHigh);
  const CallApi = () => {
    dispatch({type: 'SET_ASSET_COIN'});
  };

  useEffect(() => {
    const intervalId = setInterval(CallApi, 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    CallApi();
  }, []);

  const renderItem = ({item, index}) => {
    return <CardCoinHome item={item} index={index} />;
  };

  const CoinList = ({data, renderItem}) => (
    <FlatList
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      windowSize={10}
      contentContainerStyle={{paddingBottom: 180}}
      stickyHeaderIndices={[0]}
      data={data}
      renderItem={renderItem}
    />
  );
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = event => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / totalWidth);
    setCurrentIndex(current);
  };

  return (
    <Container style={styles.container}>
      <HeaderHome />
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          // nestedScrollEnabled
          stickyHeaderIndices={[3]}>
          <Text size={16} fontFamily={'bold'}>
            Express Checkout
          </Text>
          <FlatList
            onScroll={event => handleScroll(event)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={{marginTop: 20}}
            horizontal
            data={AssetsCoin.slice(0, 3)}
            renderItem={({item, index}) => {
              const IconURL = IconAssets.filter(el => {
                return el.name === item.symbol;
              });

              console.log(item);
              return (
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 1, y: 0.8}}
                  colors={['rgba(252, 212, 52,0.1)', ColorsDark.PRIMARY_MAIN]}
                  style={{
                    height: 100,
                    width: windowWidth - 20,
                    // paddingHorizontal: 50,
                    // backgroundColor: 'red',
                    // opacity: 0.4,
                    borderRadius: 10,
                    padding: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
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
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              top: 140,
              zIndex: 1,
              right: 0,
            }}>
            {AssetsCoin.slice(0, 3).map((item, index) => {
              return (
                <View
                  style={{
                    height: 5,
                    width: 20,
                    backgroundColor: index == currentIndex ? 'red' : 'white',
                    marginLeft: 10,
                  }}></View>
              );
            })}
          </View>
          <View
            style={{
              backgroundColor: ColorsDark.PRIMARY_MAIN,
              gap: 20,
              paddingVertical: 15,
            }}>
            <View style={{flexDirection: 'row', gap: 20}}>
              <Pressable
                style={{
                  borderBottomWidth: selectButton ? 0 : 1,
                  borderBottomColor: 'white',
                  padding: 5,
                }}
                onPress={() => setSelectButton(false)}>
                <Text size={18}>Watchlist</Text>
              </Pressable>
              <Pressable
                style={{
                  borderBottomWidth: !selectButton ? 0 : 1,
                  borderBottomColor: 'white',
                  padding: 5,
                }}
                onPress={() => setSelectButton(true)}>
                <Text size={18}>Coin</Text>
              </Pressable>
            </View>
            {selectButton && <SelectionFilterHome setValue={setFilter} />}
          </View>
          {selectButton && (
            <>
              {AssetsCoin.length > 0 && filter === 'hot' && (
                <CoinList data={AssetsCoin} renderItem={renderItem} />
              )}
              {MarketCoin.length > 0 && filter === 'market' && (
                <CoinList data={MarketCoin} renderItem={renderItem} />
              )}
              {PriceLowCoin.length > 0 && filter === 'price low' && (
                <CoinList data={PriceLowCoin} renderItem={renderItem} />
              )}
              {PriceHighCoin.length > 0 && filter === 'price high' && (
                <CoinList data={PriceHighCoin} renderItem={renderItem} />
              )}
              {AssetsCoin.length > 0 && filter === '24h' && (
                <CoinList data={AssetsCoin} renderItem={renderItem} />
              )}
            </>
          )}
          {!selectButton && (
            <>
              {AssetsCoin.length > 0 && filter === 'hot' && (
                <CoinList data={AssetsCoin} renderItem={renderItem} />
              )}
            </>
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

export default HomeOrganisms;
