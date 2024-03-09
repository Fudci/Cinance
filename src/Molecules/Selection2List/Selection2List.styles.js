import {ColorsDark, ColorsLight} from '@helpers/Color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
  },
  buttonItem: (selectButton, isDarkMode) => ({
    borderBottomWidth: selectButton ? 0 : 1,
    borderBottomColor: isDarkMode
      ? ColorsLight.PRIMARY_MAIN
      : ColorsDark.PRIMARY_MAIN,
    padding: 5,
  }),
});
