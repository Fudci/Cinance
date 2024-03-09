import {MMKV, useMMKVString} from 'react-native-mmkv';
export const storage = new MMKV();
export default function useHookStorage(props) {
  const [token, setToken] = useMMKVString('@Token');
  const [ChoiceUser, setChoiceUser] = useMMKVString('@UserChoice');

  return {token, ChoiceUser};
}
