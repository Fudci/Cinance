import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  flatlist: {
    marginTop: 20,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  liniearGrad: {
    height: 100,
    width: windowWidth - 20,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  indicatorCont: {
    flexDirection: 'row',
    position: 'absolute',
    top: windowHeight * 0.13,
    zIndex: 1,
    right: 10,
  },
  indicator: (index, currentIndex) => ({
    height: 4,
    width: 10,
    backgroundColor: index == currentIndex ? 'white' : 'grey',
    marginLeft: 2,
  }),
});
