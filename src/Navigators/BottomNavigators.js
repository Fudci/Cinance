import {heightPixel} from '@helpers/Responsive';
import HomePages from '@pages/HomePages';
import SquarePages from '@pages/SquarePages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Pressable,
  View,
  useColorScheme,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Text from '@atom/Text';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import {
  ChartBarIcon,
  SquaresPlusIcon,
  CubeIcon,
  WalletIcon,
  ArrowsRightLeftIcon,
  XMarkIcon,
  CursorArrowRaysIcon,
} from 'react-native-heroicons/solid';
import styles from './BottomNavigators.styles';
import {useEffect, useRef, useState} from 'react';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [isOpen, setisOpen] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const textisDarkMode = selected => {
    if (isDarkMode) {
      if (selected) {
        return ColorsDark.BOTTOM_PRIMARY;
      } else {
        return ColorsDark.BOTTOM_PRIMARY_DISABLE;
      }
    } else {
      if (selected) {
        return ColorsLight.BOTTOM_PRIMARY;
      } else {
        return ColorsLight.BOTTOM_PRIMARY_DISABLE;
      }
    }
  };
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial
  const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

  useEffect(() => {
    if (isOpen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start(e => {
        Animated.timing(fadeAnim, {
          toValue: 2,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start(e =>
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(),
      );
    }
  }, [isOpen]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'space-between',
            bottom: 0,
            left: 0,
            right: 0,
            height: heightPixel(60),
            alignItems: 'center',
            backgroundColor: isDarkMode
              ? ColorsDark.PRIMARY_MAIN
              : ColorsLight.PRIMARY_MAIN,
            borderColor: 'rgba(239, 239, 240,0.2)',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomePages}
          options={{
            tabBarButton: props => {
              const selected = props?.accessibilityState?.selected;
              return (
                <Pressable {...props} style={styles.containerButtonTab}>
                  {isDarkMode ? (
                    <ChartBarIcon
                      color={
                        selected
                          ? ColorsDark.BOTTOM_PRIMARY
                          : ColorsDark.BOTTOM_PRIMARY_DISABLE
                      }
                    />
                  ) : (
                    <ChartBarIcon
                      color={
                        selected
                          ? ColorsLight.BOTTOM_PRIMARY
                          : ColorsLight.BOTTOM_PRIMARY_DISABLE
                      }
                    />
                  )}
                  <Text size={12} color={textisDarkMode(selected)}>
                    Market
                  </Text>
                </Pressable>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settingss"
          component={SquarePages}
          options={{
            tabBarItemStyle: {
              height: 0,
            },
            tabBarButton: props => {
              const selected = props?.accessibilityState?.selected;
              return (
                <Pressable {...props} style={[styles.containerButtonTab2]}>
                  {isDarkMode ? (
                    <View style={{marginLeft: 5}}>
                      <SquaresPlusIcon
                        color={
                          selected
                            ? ColorsDark.BOTTOM_PRIMARY
                            : ColorsDark.BOTTOM_PRIMARY_DISABLE
                        }
                      />
                    </View>
                  ) : (
                    <View style={{marginLeft: 5}}>
                      <SquaresPlusIcon
                        color={
                          selected
                            ? ColorsDark.BOTTOM_PRIMARY
                            : ColorsDark.BOTTOM_PRIMARY_DISABLE
                        }
                      />
                    </View>
                  )}
                  <Text size={12} color={textisDarkMode(selected)}>
                    Square
                  </Text>
                </Pressable>
              );
            },
          }}
        />
        <Tab.Screen
          name="dd"
          component={HomePages}
          options={{
            tabBarButton: props => {
              const selected = props?.accessibilityState?.selected;
              return (
                <Pressable {...props} style={styles.containerButtonTab3}>
                  {isDarkMode ? (
                    <View style={{marginRight: 10}}>
                      <CubeIcon
                        color={
                          selected
                            ? ColorsDark.BOTTOM_PRIMARY
                            : ColorsDark.BOTTOM_PRIMARY_DISABLE
                        }
                      />
                    </View>
                  ) : (
                    <View style={{marginRight: 10}}>
                      <CubeIcon
                        color={
                          selected
                            ? ColorsDark.BOTTOM_PRIMARY
                            : ColorsDark.BOTTOM_PRIMARY_DISABLE
                        }
                      />
                    </View>
                  )}
                  <Text size={12} color={textisDarkMode(selected)}>
                    Discover
                  </Text>
                </Pressable>
              );
            },
          }}
        />
        <Tab.Screen
          name="Setkkkktings"
          component={SquarePages}
          options={{
            tabBarButton: props => {
              const selected = props?.accessibilityState?.selected;
              return (
                <Pressable {...props} style={styles.containerButtonTab}>
                  {isDarkMode ? (
                    <WalletIcon
                      color={
                        selected
                          ? ColorsDark.BOTTOM_PRIMARY
                          : ColorsDark.BOTTOM_PRIMARY_DISABLE
                      }
                    />
                  ) : (
                    <WalletIcon
                      color={
                        selected
                          ? ColorsLight.BOTTOM_PRIMARY
                          : ColorsLight.BOTTOM_PRIMARY_DISABLE
                      }
                    />
                  )}
                  <Text size={12} color={textisDarkMode(selected)}>
                    Porfolio
                  </Text>
                </Pressable>
              );
            },
          }}
        />
      </Tab.Navigator>
      <AnimatedTouchable
        onPress={() => {
          setisOpen(!isOpen);
        }}
        style={{
          borderRadius: 12,
          bottom: -5,
          marginBottom: 30,
          width: 40,
          height: 40,
          zIndex: 999,
          alignSelf: 'center',
          backgroundColor: ColorsDark.PRIMARY_BUTTON,
          transform: [
            {
              rotate: fadeAnim.interpolate({
                inputRange: [0, 1, 2],
                outputRange: ['45deg', '20deg', '0deg'],
              }),
            },
            {
              scale: fadeAnim.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [1, 1.2, 1],
              }),
            },
          ],
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: fadeAnim.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: ['-45deg', '-25deg', '0deg'],
                }),
              },
            ],
          }}>
          {!isOpen ? (
            <ArrowsRightLeftIcon
              stroke={'black'}
              strokeWidth={0.5}
              color={'black'}
            />
          ) : (
            <XMarkIcon stroke={'black'} color={'black'} />
          )}
        </Animated.View>
      </AnimatedTouchable>
      <Animated.View
        style={{
          backgroundColor: ColorsDark.PRIMARY_MAIN,
          height: 170,
          width: '100%',
          position: 'absolute',
          // flexDirection: 'row',
          bottom: 0,
          zIndex: 1,
          paddingVertical: 20,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          paddingHorizontal: 20,
          paddingTop: 30,
          gap: 20,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [170, 100, 0],
              }),
            },
          ],
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <CursorArrowRaysIcon
            size={30}
            color={'white'}
            // strokeWidth={1.2}
            // stroke={'grey'}
          />
          <View style={{gap: 5}}>
            <Text size={16} fontFamily={'bold'}>
              Buy
            </Text>
            <Text color={ColorsDark.TEXT_INACTIVE}>Buy crypto with INR</Text>
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
          display: isOpen ? 'flex' : 'none',
        }}></Animated.View>
    </>
  );
};

export default BottomTabs;
