import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    padding: pixelSizeHorizontal(16),
    // gap: 20,
  },
  body: {
    gap: pixelSizeVertical(20),
  },
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
