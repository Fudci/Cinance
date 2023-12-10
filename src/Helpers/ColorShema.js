import {useColorScheme} from 'react-native';

export default function useHookColor(props) {
  const isDarkMode = useColorScheme() === 'dark';

  return {isDarkMode: isDarkMode};
}
