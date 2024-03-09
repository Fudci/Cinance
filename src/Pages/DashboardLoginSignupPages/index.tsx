import React from 'react';
import DashboardLoginSignUpOrganisms from '@organisms/DashboardLoginSignUpOrganisms'; // Corrected the component name

type Props = {
  props: string;
};

const DashboardLoginSignUp = (props: Props) => {
  return <DashboardLoginSignUpOrganisms />;
};

export default DashboardLoginSignUp;
