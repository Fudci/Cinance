import {View, Text, TextInput, Animated, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './FooterDetailDiscover.styles';
import RemixIcon from 'react-native-remix-icon';
import {ColorsDark} from '@helpers/Color';
import FormInputRegular from '@molecules/FormInputRegular';

const FooterDetailDiscover = ({item}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200],
          }),
          backgroundColor: 'red',
          borderRadius: 5,
        }}>
        <TextInput />
      </Animated.View>
      <Pressable
        onPress={() => setisOpen(!isOpen)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 5,
          alignItems: 'center',
          gap: 10,
          flex: 1,
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
      </Pressable>
    </View>
  );
};

export default FooterDetailDiscover;
