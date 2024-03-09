import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: pixelSizeHorizontal(18),
    gap: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(5),
  },
  rowCheck: {
    flexDirection: 'row',
    gap: 8,
  },
  sectionCheck: {
    // paddingHorizontal: 10,
    // backgroundColor: 'pink',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
