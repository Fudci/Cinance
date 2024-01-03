import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    paddingVertical: 15,
    // paddingHorizontal:15
  },
  itemLeft: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});
