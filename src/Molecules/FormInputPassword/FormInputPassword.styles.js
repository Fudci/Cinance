import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  containerPhoneCountry: isDarkMode => ({
    backgroundColor: isDarkMode
      ? ColorsDark.TEXTINPUT_MAIN
      : ColorsLight.TEXTINPUT_MAIN,
    padding: 2,
    flexDirection: 'row',
    borderRadius: 4,
  }),
  sectoinPhoneCountry: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  sectionMarkX: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  container: {
    gap: pixelSizeVertical(8),
  },
  containerTextinput: {
    borderRadius: 4,
  },
});
