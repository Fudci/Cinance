import {ColorsDark, ColorsLight} from '@helpers/Color';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Button: isDarkMode => ({
    backgroundColor: isDarkMode
      ? ColorsDark.PRIMARY_HOVER
      : ColorsLight.PRIMARY_HOVER,
    padding: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  }),
  imageQuestion: {
    width: 300,
    height: 300,
    marginTop: 50,
    alignSelf: 'center',
  },
  wrapperText: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  wrapperOption: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    gap: 20,
    width: '100%',
  },
});
