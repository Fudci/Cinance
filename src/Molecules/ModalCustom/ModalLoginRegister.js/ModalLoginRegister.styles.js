import {ColorsDark, ColorsLight} from '@helpers/Color';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: isDarkMode => ({
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: isDarkMode
      ? ColorsDark.PRIMARY_MAIN
      : ColorsLight.PRIMARY_MAIN,
  }),
  buttonClose: {
    marginTop: 30,
  },
  imageCyrpto: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  },
  buttonSignUp: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#FCD434',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderRadius: 0,
    justifyContent: 'center',
  },
  wrapperOr: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 5,
  },
  wrapperRow: {
    flexDirection: 'row',
    gap: 5,
  },
  line: {
    backgroundColor: '#A9A9A9',
    height: 0.5,
    flex: 1,
    width: '100%',
  },
});
