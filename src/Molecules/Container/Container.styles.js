import {ColorsDark, ColorsLight} from '@helpers/Color';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: isDarkMode => ({
    width: windowWidth,
    height: windowHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: isDarkMode
      ? ColorsDark.PRIMARY_MAIN
      : ColorsLight.PRIMARY_MAIN,
  }),
});
