import {Pressable, ScrollView, View} from 'react-native';
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
const GRADIENT_FILL_COLORS = ['#7476df5D', '#7476df4D', '#7476df00'];

const DetailMarketOrganisms = ({id}) => {
  const dispatch = useDispatch();
  const [interval, setInterval] = useState('m1');
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  const gestureStarted = useRef(false);

  const D1 = useSelector(state => state.HistoryAssets.D1);
  const isLoading = useSelector(state => state.HistoryAssets.isLoading);

  const CallApi = () => {
    dispatch({type: 'SET_COIN_HISTORY', id, interval: interval});
  };

  useEffect(() => {
    CallApi();
  }, [interval]);

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
    console.log(p);
  }, []);

  return (
    <Container style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text>{id}</Text>
        <Text>{Price}</Text>

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
        <GestureHandlerRootView style={{flex: 1}}>
          <LineGraph
            gradientFillColors={true ? GRADIENT_FILL_COLORS : undefined}
            // panGestureDelay={0}
            TopAxisLabel={() => <Text>dddd</Text>}
            BottomAxisLabel={() => <Text>dddd</Text>}
            animated={true}
            style={styles.graph}
            points={D1}
            color="#2EBC84"
            enablePanGesture={true}
            onGestureStart={onGestureStart}
            onPointSelected={onPointSelected}
            onGestureEnd={onGestureEnd}
          />
        </GestureHandlerRootView>

        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: 'space-between',
            // flexDirection: 'row',
            // backgroundColor: 'red',
            flex: 1,
          }}>
          <Pressable onPress={() => setInterval('d1')} style={{flex: 1}}>
            <Text>D1</Text>
          </Pressable>
          <Pressable onPress={() => setInterval('h12')} style={{flex: 1}}>
            <Text>H12</Text>
          </Pressable>
          <Pressable onPress={() => setInterval('h6')} style={{flex: 1}}>
            <Text>H6</Text>
          </Pressable>
          <Pressable onPress={() => setInterval('h2')} style={{flex: 1}}>
            <Text>H2</Text>
          </Pressable>
          <Pressable onPress={() => setInterval('h1')}>
            <Text>H1</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Container>
  );
};

export default DetailMarketOrganisms;
