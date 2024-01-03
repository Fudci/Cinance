import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  MarkIcon: {
    backgroundColor: '#4F5866',
    position: 'absolute',
    top: pixelSizeVertical(15),
    right: pixelSizeHorizontal(20),
    borderRadius: 100,
  },
  PhoneActive: {
    // backgroundColor: '#4F5866',
    position: 'absolute',
    top: pixelSizeVertical(15),
    left: pixelSizeHorizontal(10),
    // borderRadius: 100,
    zIndex: 2,
  },
  container: {
    gap: pixelSizeVertical(8),
  },
  containerTextinput: {
    // borderWidth: 10,
    // borderColor: 'red',
    borderRadius: 100,
  },
});
