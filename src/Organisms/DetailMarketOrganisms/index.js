import {Pressable, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './DetailMarketOrganisms.styles';
import Container from '@molecules/Container/Container';
import Text from '@atom/Text';
import {useSelector, useDispatch} from 'react-redux';
import {LineGraph} from 'react-native-graph';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';

const DetailMarketOrganisms = ({id}) => {
  const dispatch = useDispatch();
  const [interval, setInterval] = useState('m1');
  const width = 256;
  const height = 256;
  const r = width * 0.33;

  const D1 = useSelector(state => state.HistoryAssets.D1);

  const CallApi = () => {
    dispatch({type: 'SET_COIN_HISTORY', id, interval: interval});
  };

  useEffect(() => {
    CallApi();
  }, [interval]);

  return (
    <Container style={styles.container}>
      <Text>Detail Page</Text>
      <Text>{id}</Text>

      <Canvas style={{width, height}}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={width - r} cy={r} r={r} color="magenta" />
          <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
        </Group>
      </Canvas>

      <LineGraph
        TopAxisLabel={() => <Text>dddd</Text>}
        BottomAxisLabel={() => <Text>dddd</Text>}
        animated={false}
        style={styles.graph}
        points={D1}
        color="#4484B2"
      />

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
          <Text>D1</Text>
        </Pressable>
        <Pressable onPress={() => setInterval('h6')} style={{flex: 1}}>
          <Text>D1</Text>
        </Pressable>
        <Pressable onPress={() => setInterval('h2')} style={{flex: 1}}>
          <Text>D1</Text>
        </Pressable>
        <Pressable onPress={() => setInterval('h1')} style={{flex: 1}}>
          <Text>D1</Text>
        </Pressable>
      </ScrollView>
    </Container>
  );
};

export default DetailMarketOrganisms;
