import {pixelSizeHorizontal} from '@helpers/Responsive';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;
export default StyleSheet.create({
  container: {
    gap: 20,
    // backgroundColor: 'red',
  },
  graph: {
    width: windowWidth - pixelSizeHorizontal(20),
    height: 600,
    // backgroundColor: 'red',
  },
  body: {
    padding: pixelSizeHorizontal(16),
  },
});
