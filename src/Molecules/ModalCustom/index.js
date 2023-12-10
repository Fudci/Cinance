import React from 'react';
import ModalLoginRegister from './ModalLoginRegister.js';

const ModalCustom = ({visible, onPress, type}) => {
  switch (type) {
    case 'Modal-Login-Register':
      return <ModalLoginRegister visible={visible} onPress={onPress} />;
    default:
      return <ModalLoginRegister visible={visible} onPress={onPress} />;
  }
};

export default ModalCustom;
