import {FlatList, Pressable, View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from '@atom/Modal';
import Button from '@atom/Button';
import {
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  UserIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';
import {ColorsDark, ColorsLight} from '@helpers/Color';
import styles from './ModalLoginRegister.styles';
import FastImage from 'react-native-fast-image';
import Images from '@helpers/Images';
import Text from '@atom/Text';
import {DataPhoneNumber} from '@helpers/DataPhoneCountry';
import FormInputSearch from '@molecules/FormInputSearch';
import {useDispatch} from 'react-redux';

const ModalPhoneNumberCountry = ({
  visible,
  setVisible,
  valueForm,
  setValueForm,
}) => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          setVisible(false);
          dispatch({type: 'SET_PHONE_COUNTRY_ACTION', payload: item});
        }}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Text size={20}>{item.emoji}</Text>
          <Text>{item.name}</Text>
        </View>
        <Text>{item.dial_code}</Text>
      </Pressable>
    );
  };
  return (
    <Modal
      visible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View style={styles.container(isDarkMode)}>
        <FlatList
          initialNumToRender={30}
          maxToRenderPerBatch={30}
          windowSize={40}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => (
            <View
              style={{
                width: '100%',
                backgroundColor: isDarkMode
                  ? ColorsDark.PRIMARY_MAIN
                  : ColorsLight.PRIMARY_MAIN,
                paddingTop: 30,
                paddingHorizontal: 16,
                gap: 10,
              }}>
              <Pressable onPress={() => setVisible(false)}>
                <ArrowLeftIcon color={ColorsDark.PRIMARY_DISABLED} />
              </Pressable>
              <FormInputSearch
                valueForm={valueForm}
                setValueForm={setValueForm}
              />
            </View>
          )}
          data={DataPhoneNumber}
          renderItem={renderItem}
        />
      </View>
    </Modal>
  );
};

export default ModalPhoneNumberCountry;
