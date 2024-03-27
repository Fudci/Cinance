import {ColorsDark} from '@helpers/Color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: ColorsDark.PRIMARY_MAIN,
    flexDirection: 'row',
    borderTopWidth: 0.4,
    borderTopColor: ColorsDark.PRIMARY_DISABLED,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
});
