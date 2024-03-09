import {Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Images from '@helpers/Images';
import Container from '@molecules/Container/Container';

const MainScreen = () => {
  return (
    <Container>
      <FastImage
        resizeMode="contain"
        source={Images.QUESTION}
        style={{width: 300, height: 300}}
      />
      <Text>sss</Text>
    </Container>
  );
};

export default MainScreen;
