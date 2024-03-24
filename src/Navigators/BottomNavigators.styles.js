import {ColorsDark, ColorsLight} from '@helpers/Color';
import {heightPixel} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: heightPixel(60),
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 100,
    borderTopColor: '#ECECEE',
    borderTopWidth: 0.05,
  },
  containerButtonTab: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'pink',
    // justifyContent: 'space-between',
    // margin: 10,
  },
  containerButtonTab2: {
    padding: 10,
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
    // justifyContent: 'space-between',
    // margin: 10,
  },
  containerButtonTab3: {
    padding: 10,
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'pink',
    // justifyContent: 'space-between',
    // margin: 10,
  },
});
