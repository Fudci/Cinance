import * as React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Container from '@molecules/Container/Container';
import {ColorsDark} from '@helpers/Color';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import Text from '@atom/Text';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';

function FeedScreen() {
  const [discoverData, setDiscoverData] = React.useState([]);
  const getVersion = async () => {
    const version = firestore()
      .collection('Discover')
      .get()
      .then(querySnapshot => {
        setDiscoverData(querySnapshot._docs);
        console.log('Total users: ', querySnapshot._docs.length);

        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot._data);
        });
      });
  };

  const AddData = () => {
    firestore()
      .collection('Discover')
      .add({
        name: 'Crypto',
        profile:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tjUOUBGnthmW762mbRAFdQHaE8%26pid%3DApi&f=1&ipt=0fd8fe7d21062537a9cf5d92927407d17384bb7e6bb5030f23ed531151a88403&ipo=images',
        description:
          'A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system. To use cryptocurrencies, you need a cryptocurrency wallet.',
        attachements:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9XegJoYhCcb1NOZ0RiPa-AHaE2%26pid%3DApi&f=1&ipt=5404eac497aea944286ff0e907c1aead04991c05e43264e77565d60fde8de193&ipo=images',
      })
      .then(e => console.log('Berhasil'))
      .catch(e => console.log('gagal'));
  };

  React.useEffect(() => {
    // FindData();
    getVersion();
    // AddData();
  }, []);

  const renderItem = ({item, index}) => {
    console.log(item?._data?.profile, 'this item');
    return (
      <View
        style={{
          // backgroundColor: 'red',
          // height: 100,
          // backgroundColor: 'red',
          width: '100%',
          gap: 10,
          paddingVertical: 10,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <FastImage
              source={{uri: item?._data?.profile}}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
            <View>
              <Text numberOfLines={1}>{item?._data?.name}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                paddingHorizontal: 10,
                backgroundColor: ColorsDark.PRIMARY_BUTTON,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text numberOfLines={1} color={'black'}>
                Follow
              </Text>
            </View>
            <EllipsisVerticalIcon color={ColorsDark.TEXT_INACTIVE} />
          </View>
        </View>
        <View>
          <Text size={16} lineHeight={24} numberOfLines={4}>
            {item?._data?.description}
          </Text>
        </View>
        <FastImage
          source={{uri: item?._data?.attachements}}
          style={{width: '100%', height: 200}}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: ColorsDark.PRIMARY_MAIN,
        // paddingHorizontal: 16,
      }}>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        initialNumToRender={10}
        windowSize={5}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
        // style={{marginTop: 20}}
        data={discoverData}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 5, with: '100%', backgroundColor: 'black'}}></View>
        )}
      />
      <Text>sdfsdfsdfsdf!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <View
        style={{
          backgroundColor: ColorsDark.PRIMARY_MAIN,
          height: 32,
          width: '100%',
        }}></View>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: ColorsDark.TEXT_MAIN,
          tabBarInactiveTintColor: ColorsDark.TEXT_INACTIVE,
          tabBarLabelStyle: {fontSize: 14, textTransform: 'none'},
          tabBarIndicatorStyle: {opacity: 0},
          tabBarStyle: {
            backgroundColor: ColorsDark.PRIMARY_MAIN,
            // marginTop: 32,
          },
        }}>
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{tabBarLabel: 'Discover'}}
        />
        <Tab.Screen
          name="Following"
          component={NotificationsScreen}
          options={{tabBarLabel: 'Following'}}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{tabBarLabel: 'News'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarLabel: 'Academy'}}
        />
      </Tab.Navigator>
    </>
  );
}
export default function SquareOrganisms() {
  return (
    // <Container style={{marginTop: 50}}>
    <MyTabs />
    // </Container>
  );
}
