import {View, Text, Easing, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {storage} from '@helpers/Storage';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Function = Email => {
  const navigation = useNavigation();
  const [Password, setPassword] = useState('');
  const [ReferalId, setReferalId] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [modalActivePhone, setModalActivePhone] = useState(false);
  const [valueCountry, setvalueCountry] = useState();
  const [valueCheck, setvalueCheck] = useState(false);
  const [errorCheck, setErrorCheck] = useState(false);
  const [hasNext, sethasNext] = useState(false);
  const [has8Char, sethas8Char] = useState(false);
  const [has1Num, sethas1Num] = useState(false);
  const [hasUpperCase, sethasUpperCase] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const ButtonNext = async () => {
    setisLoading(true);
    if (Password) {
      firestore()
        .collection('Users')
        .where('name', '==', Email.Email)
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty) {
            const user = querySnapshot.docs[0].data();
            setisLoading(false);
            Alert.alert('nama email sudah di gunakan');
          } else {
            firestore()
              .collection('Users')
              .add({
                email: Email.Email,
                password: Password,
              })
              .then(() => {
                storage.set('@email', Email.Email);
                storage.set('@password', Password);
                setisLoading(false);
                navigation.replace('BootomTabPages');
                console.log('User added!');
              })
              .catch(err => {
                console.log(err);
              });
            console.log('else');
          }
        });
    } else {
      setisLoading(false);
      Alert.alert('nama email sudah di gunakan');
    }
  };

  function hasNumbers(t) {
    var regex = /\d/g;
    return regex.test(t);
  }

  useEffect(() => {
    if (Password.length > 8) {
      sethas8Char(true);
    } else {
      sethas8Char(false);
    }
    if (hasNumbers(Password)) {
      sethas1Num(true);
    } else {
      sethas1Num(false);
    }
    if (Password !== Password.toLowerCase()) {
      sethasUpperCase(true);
    } else {
      sethasUpperCase(false);
    }
  }, [Password]);

  useEffect(() => {
    if (hasNext) {
      if (valueCheck) {
        setErrorCheck(false);
      } else {
        setErrorCheck(true);
      }
    }
  }, [valueCheck]);

  return {
    isLoading,
    has1Num,
    has8Char,
    hasUpperCase,
    ButtonNext,
    errorCheck,
    Password,
    ReferalId,
    valueSearch,
    modalActivePhone,
    valueCountry,
    valueCheck,
    setPassword,
    setReferalId,
    setValueSearch,
    setModalActivePhone,
    setvalueCountry,
    setvalueCheck,
  };
};

export default Function;
