import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  body: {
    gap: pixelSizeVertical(20),
  },
  row: isDarkMode => ({
    backgroundColor: isDarkMode
      ? ColorsDark.PRIMARY_MAIN
      : ColorsLight.PRIMARY_MAIN,
    gap: 20,
    paddingVertical: 15,
  }),
});
