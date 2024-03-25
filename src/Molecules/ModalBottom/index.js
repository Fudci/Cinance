import {View} from 'react-native';
import React from 'react';
import Modal from '@atom/Modal';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles from './ModalBottom.styles';
import Text from '@atom/Text';
const ModalBottom = ({setValue, value}) => {
  

  const closeModal = () => {
    setValue(false);
  };
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: _ => {
      //   if (translateY.value > 100) {
      //     setValue(false);
      //   }

      if (value) {
        // replace `onClose` with your close function
        runOnJS(closeModal)();
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <Modal visible={value}>
      <GestureHandlerRootView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            width: '100%',
            height: '100%',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.container, animatedStyle]}>
              <ScrollView>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
                <Text>alsdkfjlsadkjfsdf</Text>
              </ScrollView>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default ModalBottom;
