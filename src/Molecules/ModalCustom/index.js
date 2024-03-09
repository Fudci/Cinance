import React from 'react';
import ModalLoginRegister from './ModalLoginRegister.js';
import ModalPhoneNumberCountry from './ModalReligion/index.js';

const ModalCustom = ({
  visible,
  onPress,
  type,
  setVisible,
  valueForm,
  setValueForm,
}) => {
  switch (type) {
    case 'Modal-Login-Register':
      return (
        <ModalLoginRegister
          visible={visible}
          onPress={onPress}
          setVisible={setVisible}
        />
      );
    case 'Modal-Phone-Number-Religion':
      return (
        <ModalPhoneNumberCountry
          visible={visible}
          setVisible={setVisible}
          setValueForm={setValueForm}
          valueForm={valueForm}
        />
      );
    default:
      return (
        <ModalLoginRegister
          visible={visible}
          onPress={onPress}
          setVisible={setVisible}
        />
      );
  }
};

export default ModalCustom;
