import {ColorsDark, ColorsLight} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // height: 2000,
    // padding: pixelSizeHorizontal(16),
    // gap: 20,
  },
  wrapper: {
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  wrapperContent: {
    paddingHorizontal: pixelSizeHorizontal(10),
    gap: 20,
  },
  body: {
    gap: 15,
    marginTop: 20,
  },
  wrapperCount: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    borderTopWidth: 0.2,
    borderBottomColor: ColorsDark.PRIMARY_DISABLED,
    borderTopColor: ColorsDark.TEXT_INACTIVE,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  countItem: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
  },
});
