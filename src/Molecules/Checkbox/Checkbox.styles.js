import {ColorsDark} from '@helpers/Color';
import {pixelSizeHorizontal, pixelSizeVertical} from '@helpers/Responsive';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: ColorsDark.PRIMARY_DISABLED,
    paddingHorizontal: pixelSizeHorizontal(3),
    paddingVertical: pixelSizeVertical(3),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
});
