import {View, Text, Animated, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './FooterDetailDiscover.styles';
import RemixIcon from 'react-native-remix-icon';
import {ColorsDark} from '@helpers/Color';
import FormInputRegular from '@molecules/FormInputRegular';
import TextInput from '@atom/TextInput';

const FooterDetailDiscover = ({item, isScroll}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [text, setText] = useState('');
  const [isOpen, setisOpen] = useState(false)


  useEffect(() => {
    if (isScroll) {
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
  }, [isScroll]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
          }),
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          borderRadius: 5,
        }}>
        <View style={{height: 40}}>
          <TextInput
            style={{borderRadius: 10}}
            placeholder={'Write a replay..'}
            setActiveTextinput={setisOpen}
            value={text}
            setvalueText={setText}
          />
        </View>
      </Animated.View>
      <Pressable
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
          <Text
            style={{display: isScroll ? 'none' : 'flex'}}
            size={10}
            color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            display: isScroll ? 'none' : 'flex',
          }}>
          <RemixIcon
            name="ri-message-2-line"
            size={15}
            color={ColorsDark.TEXT_INACTIVE}
          />
          <Text size={10} color={ColorsDark.TEXT_INACTIVE}>
            33
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
          <Text
            style={{display: isScroll ? 'none' : 'flex'}}
            size={10}
            color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <RemixIcon
            name="ri-share-forward-fill"
            size={15}
            color={ColorsDark.TEXT_INACTIVE}
          />
          <Text
            style={{display: isScroll ? 'none' : 'flex'}}
            size={10}
            color={ColorsDark.TEXT_INACTIVE}>
            1
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FooterDetailDiscover;
