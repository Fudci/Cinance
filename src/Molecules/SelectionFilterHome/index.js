import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ColorsDark} from '@helpers/Color';

const SelectionFilterHome = ({setValue}) => {
  const [filter, setFilter] = useState('hot');
  const onPressFilter = value => {
    setFilter(value);
  };

  useEffect(() => {
    setValue(filter);
  }, [filter]);

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        marginTop: 10,
        // paddingHorizontal: 15,
      }}>
      <Pressable
        onPress={() => onPressFilter('hot')}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 100,
          backgroundColor:
            filter == 'hot' ? ColorsDark.PRIMARY_DISABLED : 'transparent',
        }}>
        <Text active valueActive={filter} nameValue={'hot'}>
          Hot
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onPressFilter('market')}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 100,
          backgroundColor:
            filter == 'market' ? ColorsDark.PRIMARY_DISABLED : 'transparent',
        }}>
        <Text active valueActive={filter} nameValue={'market'}>
          Market Cap
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          if (filter == 'price low') {
            onPressFilter('price high');
          } else {
            onPressFilter('price low');
          }
        }}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 100,
          backgroundColor:
            filter == 'price low' || filter == 'price high'
              ? ColorsDark.PRIMARY_DISABLED
              : 'transparent',
        }}>
        <View style={{flexDirection: 'row', gap: 2}}>
          <Text>Price</Text>
          {filter === 'price low' && <Text size={10}>▲</Text>}
          {filter === 'price high' && <Text size={10}>▼</Text>}
        </View>
      </Pressable>
      <Pressable
        onPress={() => onPressFilter('24h')}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 100,
          backgroundColor:
            filter == '24h' ? ColorsDark.PRIMARY_DISABLED : 'transparent',
        }}>
        <Text>24H Change</Text>
      </Pressable>
    </View>
  );
};

export default SelectionFilterHome;
