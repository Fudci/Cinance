import {View, Text, Easing} from 'react-native';
import React, {useEffect, useState} from 'react';
import {storage} from '@helpers/Storage';
import {useNavigation} from '@react-navigation/native';

const Function = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [ReferalId, setReferalId] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [modalActivePhone, setModalActivePhone] = useState(false);
  const [valueCountry, setvalueCountry] = useState();
  const [valueCheck, setvalueCheck] = useState(false);
  const [errorCheck, setErrorCheck] = useState(false);
  const [hasNext, sethasNext] = useState(false);

  const ButtonNext = async () => {
    // setErrorCheck(false);
    navigation.navigate('SetUpPasswordPages');
    // console.log('lolos');
    // const User = {
    //   'phone/email': Email,
    // };
    // storage.set('@');
  };

  return {
    ButtonNext,
    errorCheck,
    Email,
    ReferalId,
    valueSearch,
    modalActivePhone,
    valueCountry,
    valueCheck,
    setEmail,
    setReferalId,
    setValueSearch,
    setModalActivePhone,
    setvalueCountry,
    setvalueCheck,
  };
};

export default Function;
