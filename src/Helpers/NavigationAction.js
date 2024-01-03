import {useNavigation} from '@react-navigation/native';
import React from 'react';
export const Navigate = (route, params) => {
  const navigation = useNavigation();
  return navigation.navigate(route, {params});
};
