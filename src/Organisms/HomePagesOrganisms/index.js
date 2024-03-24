import {
  FlatList,
  LogBox,
  ScrollView,
  View,
  useColorScheme,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './DashboardLoginSingup.styles';
import Container from '@molecules/Container/Container';
import {useSelector, useDispatch} from 'react-redux';
import SelectionFilterHome from '@molecules/SelectionFilterHome';
import CardCoinHome from '@molecules/CardCoinHome';
import HeaderHome from '@molecules/HeaderHome';
import HeaderHighligth from '@molecules/HeaderHighlight';
import Selection2List from '@molecules/Selection2List';

const HomeOrganisms = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('hot');
  const [selectButton, setSelectButton] = useState(true);
  const [modalActive, setModalActive] = useState(true);
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
      maxToRenderPerBatch={20}
      initialNumToRender={20}
      windowSize={10}
      contentContainerStyle={{paddingBottom: 180}}
      stickyHeaderIndices={[0]}
      data={data}
      renderItem={renderItem}
      getItemLayout={(data, index) => ({
        length: 100,
        offset: 100 * index,
        index,
      })}
    />
  );

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.']);
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Container style={styles.container}>
      <HeaderHome />
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}>
          <HeaderHighligth />
          {/* <ModalBottom value={modalActive} setValue={setModalActive} /> */}
          <View style={styles.row(isDarkMode)}>
            <Selection2List setValue={setSelectButton} value={selectButton} />
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
