import React from 'react';
import DetailMarketOrganisms from '@organisms/DetailMarketOrganisms';

const DetailMarketPages = props => {
  return <DetailMarketOrganisms id={props?.route?.params?.id} />;
};

export default DetailMarketPages;
