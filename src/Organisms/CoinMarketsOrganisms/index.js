import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import SelectionFilterHome from '@molecules/SelectionFilterHome';
import Container from '@molecules/Container/Container';
import {useSelector, useDispatch} from 'react-redux';
import CardCoinHome from '@molecules/CardCoinHome';

const CoinMarketsOrganisms = () => {
  const [filter, setFilter] = useState('hot');
  const AssetsCoin = useSelector(state => state.AssetsReducers.Assets);
  const MarketCoin = useSelector(state => state.AssetsReducers.Markets);
  const PriceLowCoin = useSelector(state => state.AssetsReducers.PriceLow);
  const PriceHighCoin = useSelector(state => state.AssetsReducers.PriceHigh);

  const renderItem = ({item, index}) => {
    return <CardCoinHome item={item} index={index} />;
  };
  const CoinList = ({data, renderItem}) => (
    <FlatList
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      windowSize={10}
      contentContainerStyle={{paddingBottom: 1800}}
      stickyHeaderIndices={[0]}
      data={data}
      renderItem={renderItem}
    />
  );

  return (
    <Container>
      <SelectionFilterHome setValue={setFilter} />
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
    </Container>
  );
};

export default CoinMarketsOrganisms;
