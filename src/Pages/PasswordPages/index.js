import React from 'react';
import PasswordOrganisms from '@organisms/PasswordOrganisms';

const PasswordPages = props => {
  console.log(props.route.params, 'passing');

  return <PasswordOrganisms passingEmail={props.route.params} />;
};

export default PasswordPages;
