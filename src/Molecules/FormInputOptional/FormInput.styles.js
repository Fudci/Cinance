import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    gap: pixelSizeVertical(8),
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  containerPhoneCountry: isDarkMode => ({
    backgroundColor: isDarkMode
      ? ColorsDark.TEXTINPUT_MAIN
      : ColorsLight.TEXTINPUT_MAIN,
    padding: 2,
    flexDirection: 'row',
    borderRadius: 4,
  }),
  rowTextIcon: {
    flexDirection: 'row',
    gap: pixelSizeHorizontal(5),
    alignItems: 'center',
  },
  sectionMarkX: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
  },
});
