import {View} from 'react-native';
import React from 'react';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';
import FastImage from 'react-native-fast-image';
import Text from '@atom/Text';
import {ColorsDark} from '@helpers/Color';

const HeaderDiscover = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          alignItems: 'center',
        }}>
        <FastImage
          source={{uri: item?.profile}}
          style={{width: 50, height: 50, borderRadius: 50}}
        />
        <View>
          <Text numberOfLines={1}>{item?.name}</Text>
          {/* <Text numberOfLines={1}>{item?._data?.name}</Text> */}
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            paddingHorizontal: 10,
            backgroundColor: ColorsDark.PRIMARY_BUTTON,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text numberOfLines={1} color={'black'}>
            Follow
          </Text>
        </View>
        <EllipsisVerticalIcon color={ColorsDark.TEXT_INACTIVE} />
      </View>
    </View>
  );
};

export default HeaderDiscover;
