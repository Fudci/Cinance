import {Modal as ModalRN} from 'react-native';
import React from 'react';

const Modal = ({visible, children}) => {
  return (
    <ModalRN animationType="fade" statusBarTranslucent visible={visible}>
      {children}
    </ModalRN>
  );
};

export default Modal;
