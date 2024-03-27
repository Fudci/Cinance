import {View, Image, Pressable} from 'react-native';
import React, {memo, useMemo, useState} from 'react';
import styles from './CardDiscover.styles';
import FastImage from 'react-native-fast-image';
import {ColorsDark} from '@helpers/Color';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';
import RemixIcon from 'react-native-remix-icon';
import Text from '@atom/Text';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import HeaderDiscover from '@molecules/HeaderDiscover';

const CardDiscover = ({item, index}) => {
  const [heightImage, setheightImage] = useState(0);

  useMemo(() => {
    Image.getSize(item?._data?.attachements, (width, height) => {
      setheightImage({width, height});
    });
  }, [item]);

  const navigation = useNavigation();

  return (
    <View
      onLayout={event => {
        const {x, y, width, height} = event.nativeEvent.layout;
      }}
      style={{
        width: '100%',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
      }}>
      <HeaderDiscover item={item?._data} />
      <View>
        <Text size={16} lineHeight={24} numberOfLines={4}>
          {item?._data?.description}
        </Text>
      </View>
      {/* 3 items */}
      {/* <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 5,
            overflow: 'hidden',
            borderRadius: 10,
          }}>
          <View style={{flex: 1}}>
            <FastImage
              source={{uri: item?._data?.attachements}}
              style={{width: '100%', height: 205}}
            />
          </View>
          <View style={{flex: 1, gap: 5}}>
            <View style={{width: 300}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{width: '100%', height: 100}}
              />
            </View>
            <View style={{width: 300}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{width: '100%', height: 100}}
              />
            </View>
          </View>
        </View> */}
      {/* 4 Items */}
      {/* <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 5,
            overflow: 'hidden',
            borderRadius: 10,
          }}>
          <View style={{flex: 1, gap: 5}}>
            <View style={{flex: 1}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{width: '100%', height: 100}}
              />
            </View>
            <View style={{flex: 1}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{width: '100%', height: 100}}
              />
            </View>
          </View>
          <View style={{flex: 1, gap: 5}}>
            <View style={{flex: 1}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{width: '100%', height: 100}}
              />
            </View>
            <View style={{flex: 1}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{width: '100%', height: 100}}
              />
            </View>
          </View>
        </View> */}

      {/* 2 Items */}
      {/* <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 5,
            overflow: 'hidden',
            borderRadius: 10,
          }}>
          <View style={{flex: 1, gap: 5}}>
            <View style={{flex: 1}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{flex: 1, aspectRatio: 1}}
              />
            </View>
          </View>
          <View style={{flex: 1, gap: 5}}>
            <View style={{flex: 1}}>
              <FastImage
                source={{uri: item?._data?.attachements}}
                style={{flex: 1, aspectRatio: 1}}
              />
            </View>
          </View>
        </View> */}

      {/* 1 items */}
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: 5,
          overflow: 'hidden',
          borderRadius: 10,
          // alignSelf:'flex-start'
        }}>
        <View style={{flex: 1, gap: 5}}>
          <Pressable
            onPress={() =>
              navigation.navigate('DetailDiscover', {
                image: item?._data,
              })
            }
            style={{flex: 1}}>
            <Image
              source={{uri: item?._data?.attachements}}
              style={{flex: 1, height: heightImage.height}}
            />
          </Pressable>
        </View>
      </View>

      {/* bottom */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 5,
        }}>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <RemixIcon
            name="ri-bar-chart-2-fill"
            size={15}
            color={ColorsDark.TEXT_INACTIVE}
          />
          <Text size={10} color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <RemixIcon
            name="ri-message-2-line"
            size={15}
            color={ColorsDark.TEXT_INACTIVE}
          />
          <Text size={10} color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <RemixIcon
            name="ri-thumb-up-fill"
            size={15}
            color={ColorsDark.TEXT_INACTIVE}
          />
          <Text size={10} color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <View style={{transform: [{rotate: '90deg'}]}}>
            <RemixIcon
              name="ri-repeat-line"
              size={15}
              color={ColorsDark.TEXT_INACTIVE}
            />
          </View>
          <Text size={10} color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <RemixIcon
            name="ri-share-forward-fill"
            size={15}
            color={ColorsDark.TEXT_INACTIVE}
          />
          <Text size={10} color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(CardDiscover);
