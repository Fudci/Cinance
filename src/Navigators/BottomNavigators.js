import {heightPixel} from '@helpers/Responsive';
import HomePages from '@pages/HomePages';
import SquarePages from '@pages/SquarePages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable, useColorScheme} from 'react-native';
import Text from '@atom/Text';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import {
  ChartBarIcon,
  SquaresPlusIcon,
  CubeIcon,
  WalletIcon,
} from 'react-native-heroicons/solid';
import styles from './BottomNavigators.styles';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const isDarkMode = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: 'column',
          position: 'absolute',
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
                {isDarkMode ? (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Square
                  </Text>
                ) : (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Square
                  </Text>
                )}
              </Pressable>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SquarePages}
        options={{
          tabBarButton: props => {
            const selected = props?.accessibilityState?.selected;
            return (
              <Pressable {...props} style={styles.containerButtonTab}>
                {isDarkMode ? (
                  <SquaresPlusIcon
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }
                  />
                ) : (
                  <SquaresPlusIcon
                    color={
                      selected
                        ? ColorsLight.BOTTOM_PRIMARY
                        : ColorsLight.BOTTOM_PRIMARY_DISABLE
                    }
                  />
                )}
                {isDarkMode ? (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Market
                  </Text>
                ) : (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Market
                  </Text>
                )}
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
              <Pressable {...props} style={styles.containerButtonTab}>
                {isDarkMode ? (
                  <CubeIcon
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }
                  />
                ) : (
                  <CubeIcon
                    color={
                      selected
                        ? ColorsLight.BOTTOM_PRIMARY
                        : ColorsLight.BOTTOM_PRIMARY_DISABLE
                    }
                  />
                )}
                {isDarkMode ? (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Discover
                  </Text>
                ) : (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Discover
                  </Text>
                )}
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
                {isDarkMode ? (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Portfolio
                  </Text>
                ) : (
                  <Text
                    size={12}
                    color={
                      selected
                        ? ColorsDark.BOTTOM_PRIMARY
                        : ColorsDark.BOTTOM_PRIMARY_DISABLE
                    }>
                    Portfolio
                  </Text>
                )}
              </Pressable>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
