import {
  Dimensions,
  Pressable,
  ScrollView,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './DetailMarketOrganisms.styles';
import Container from '@molecules/Container/Container';
import Text from '@atom/Text';
import {useSelector, useDispatch} from 'react-redux';
import {LineGraph} from 'react-native-graph';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import FastImage from 'react-native-fast-image';
import Images from '@helpers/Images';
import {SCREEN_HEIGHT} from '@helpers/Responsive';
import Header from '@molecules/Header';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PriceUsd, PriceUsdSingle} from '@helpers/PriceUsd';
import {Precentage24 as Percentage24} from '@helpers/GetColorIcon';
import {Capitalize} from '@helpers/Capitalize';
import {ColorsDark} from '@helpers/Color';
const GRADIENT_FILL_COLORS = ['#7476df5D', '#7476df4D', '#7476df00'];

const DetailMarketOrganisms = ({id}) => {
  const dispatch = useDispatch();
  const [interval, setInterval] = useState('h1');
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  const gestureStarted = useRef(false);

  const D1 = useSelector(state => state.HistoryAssets.D1);
  const H1 = useSelector(state => state.HistoryAssets.H1);
  const H2 = useSelector(state => state.HistoryAssets.H2);
  const H6 = useSelector(state => state.HistoryAssets.H6);
  const H12 = useSelector(state => state.HistoryAssets.H12);
  const Min = useSelector(state => state.HistoryAssets.min);
  const Max = useSelector(state => state.HistoryAssets.max);

  const DetailCoin = useSelector(state => state.HistoryAssets.detailCoin);
  const isLoading = useSelector(state => state.HistoryAssets.isLoading);

  const CallApi = () => {};

  // useEffect(() => {
  //   CallApi();
  // }, [interval]);

  useEffect(() => {
    dispatch({type: 'SET_COIN_HISTORY', id, interval: interval});
    dispatch({type: 'SET_COIN_DETAIL', id});
  }, []);

  const [Price, setPrice] = useState();

  const currentPrice = 0;

  const onGestureStart = useCallback(() => {
    // hapticFeedback('impactLight');
  }, []);

  const onGestureEnd = useCallback(() => {
    // setPriceTitle(currentPrice);
    setPrice(0);
  }, []);

  const onPointSelected = useCallback(p => {
    gestureStarted.current = false;

    // setPriceTitle(p);
    setPrice(p.value);
  }, []);

  const AxisLabel = ({value, index, arrayLength}) => {
    const textColor = useColorScheme() === 'dark' ? '#fff' : '#000';
    const location =
      (index / arrayLength) * (Dimensions.get('window').width - 40) || 0;
    return (
      <View style={{transform: [{translateX: index}]}}>
        <Text>{value}</Text>
      </View>
    );
  };

  const color = DetailCoin?.changePercent24Hr?.includes('-')
    ? '#FF0000'
    : '#2EBC84';

  function formatNumber(inputStr) {
    try {
      const number = parseFloat(inputStr);
      if (!isNaN(number)) {
        const formattedNumber = number.toFixed(2);
        return formattedNumber;
      } else {
        return 'Invalid input, please provide a valid number.';
      }
    } catch (error) {
      return 'An error occurred while formatting the number.';
    }
  }

  return (
    <Container style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.body}>
          <View style={{flexDirection: 'row'}}>
            <Text
              size={16}
              fontFamily={'bold'}
              style={{textTransform: 'uppercase'}}>
              {Capitalize(id)}
            </Text>
            <Text> {DetailCoin?.symbol}</Text>
          </View>
          <Text size={24} fontFamily={'bold'}>
            ${Price ? formatNumber(Price) : formatNumber(DetailCoin.priceUsd)}
          </Text>
          {/* <Text> {DetailCoin?.changePercent24Hr?.slice(0, 4)}</Text> */}

          {isLoading && (
            <FastImage
              resizeMode="contain"
              source={Images.LOADER}
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                top: SCREEN_HEIGHT * 0.2,
                zIndex: 9,
                alignSelf: 'center',
              }}
            />
          )}
          <GestureHandlerRootView style={{marginVertical: 20}}>
            <View>
              {interval == 'd1' && (
                <LineGraph
                  animated={true}
                  style={styles.graph}
                  points={D1}
                  color={color}
                  enablePanGesture={true}
                  onGestureStart={onGestureStart}
                  onPointSelected={onPointSelected}
                  onGestureEnd={onGestureEnd}
                />
              )}
              {interval == 'h1' && (
                <LineGraph
                  animated={true}
                  style={styles.graph}
                  points={H1}
                  color={color}
                  enablePanGesture={true}
                  onGestureStart={onGestureStart}
                  onPointSelected={onPointSelected}
                  onGestureEnd={onGestureEnd}
                />
              )}
              {interval == 'h2' && (
                <LineGraph
                  animated={true}
                  style={styles.graph}
                  points={H2}
                  color={color}
                  enablePanGesture={true}
                  onGestureStart={onGestureStart}
                  onPointSelected={onPointSelected}
                  onGestureEnd={onGestureEnd}
                />
              )}
              {interval == 'h6' && (
                <LineGraph
                  animated={true}
                  style={styles.graph}
                  points={H6}
                  color={color}
                  enablePanGesture={true}
                  onGestureStart={onGestureStart}
                  onPointSelected={onPointSelected}
                  onGestureEnd={onGestureEnd}
                />
              )}
              {interval == 'h12' && (
                <LineGraph
                  animated={true}
                  style={styles.graph}
                  points={H12}
                  color={color}
                  enablePanGesture={true}
                  onGestureStart={onGestureStart}
                  onPointSelected={onPointSelected}
                  onGestureEnd={onGestureEnd}
                />
              )}
            </View>
          </GestureHandlerRootView>

          <ScrollView
            horizontal
            contentContainerStyle={{
              justifyContent: 'space-between',
              flex: 1,
              marginVertical: 4,
              gap: 30,
              marginBottom: 10,
            }}>
            <Pressable
              onPress={() => setInterval('h1')}
              style={{
                flex: 1,
                backgroundColor: interval == 'h1' ? 'white' : null,
                alignItems: 'center',
                borderRadius: 8,
                // paddingVertical: 2,
              }}>
              <Text color={interval == 'h1' ? 'black' : 'white'}>H1</Text>
            </Pressable>
            <Pressable
              onPress={() => setInterval('h2')}
              style={{
                flex: 1,
                backgroundColor: interval == 'h2' ? 'white' : null,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text color={interval == 'h2' ? 'black' : 'white'}>H2</Text>
            </Pressable>
            <Pressable
              onPress={() => setInterval('h6')}
              style={{
                flex: 1,
                backgroundColor: interval == 'h6' ? 'white' : null,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text color={interval == 'h6' ? 'black' : 'white'}>H6</Text>
            </Pressable>
            <Pressable
              onPress={() => setInterval('h12')}
              style={{
                flex: 1,
                backgroundColor: interval == 'h12' ? 'white' : null,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text color={interval == 'h12' ? 'black' : 'white'}>H12</Text>
            </Pressable>
            <Pressable
              onPress={() => setInterval('d1')}
              style={{
                flex: 1,
                backgroundColor: interval == 'd1' ? 'white' : null,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text color={interval == 'd1' ? 'black' : 'white'}>D1</Text>
            </Pressable>
          </ScrollView>

          <Text size={16}>About {Capitalize(id)}</Text>
          {Object.entries(DetailCoin).map(([key, v]) => {
            return (
              <View
                key={key}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <Text color={ColorsDark.TEXT_INACTIVE}>{Capitalize(key)}</Text>
                <Text>{v}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default DetailMarketOrganisms;
