import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const PagerIndicator = ({numberOfPages, currentPage}) => {
  const animatedValue = new Animated.Value(currentPage);

  Animated.spring(animatedValue, {
    toValue: currentPage,
    friction: 5,
    tension: 40,
    useNativeDriver: false,
  }).start();

  const indicators = Array.from({length: numberOfPages}, (_, index) => (
    <Animated.View
      key={index}
      style={[
        styles.indicator,
        {
          opacity: animatedValue.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          }),
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.8, 1.2, 0.8],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
      ]}
    />
  ));

  return <View style={styles.container}>{indicators}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
    backgroundColor: 'blue', // Change color as needed
  },
});

export default PagerIndicator;
