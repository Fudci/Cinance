import {View, Text} from 'react-native';
import React from 'react';
import SetUpPasswordOrganisms from '@organisms/SetUpPasswordOrganisms';

const SetUpPasswordPages = props => {
  return <SetUpPasswordOrganisms Email={props?.route?.params?.Email} />;
};

export default SetUpPasswordPages;
