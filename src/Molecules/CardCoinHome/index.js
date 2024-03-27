import {Pressable, TouchableOpacity, View} from 'react-native';
import React, {memo, useMemo} from 'react';
import styles from './CardCointHome.style';
import {IconAssets} from '@helpers/IconCoins';
import FastImage from 'react-native-fast-image';
import {Precentage24} from '@helpers/GetColorIcon';
import {PriceUsd} from '@helpers/PriceUsd';
import {ColorsDark} from '@helpers/Color';
import Text from '@atom/Text';
import {useNavigation} from '@react-navigation/native';

const CardCoinHome = ({item, index}) => {
  const navigation = useNavigation();
  const IconURL = IconAssets.filter(el => {
    return el.name === item.symbol;
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailMarketsPages', {id: item.id})}
      style={styles.container}>
      <View style={styles.itemLeft}>
        <FastImage
          style={styles.image}
          source={{
            uri: IconURL[0]?.url,
          }}
        />
        <View>
          <Text fontFamily={'bold'} size={16}>
            {item.name}
          </Text>
          <Text color={ColorsDark.PRIMARY_DISABLED}>{item.symbol}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text
          fontFamily={'bold'}
          size={16}
          color={Precentage24(item?.changePercent24Hr.slice(0, 4))?.color}>
          {Precentage24(item?.changePercent24Hr.slice(0, 4))?.value}
        </Text>
        <Text>${PriceUsd(item.priceUsd)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardCoinHome);
