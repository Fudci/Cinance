import React from 'react';
import DiscoverDetailOrganisms from '@organisms/DiscoverDetailOrganisms';

const DetailDiscoverPages = props => {
  return <DiscoverDetailOrganisms route={props?.route?.params} />;
};

export default DetailDiscoverPages;
