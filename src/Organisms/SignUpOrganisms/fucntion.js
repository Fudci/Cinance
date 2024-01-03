import React, {useEffect, useState} from 'react';
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
  const [errorValueEmpty, setErrorValueEmpty] = useState(false);
  const [hasNext, sethasNext] = useState(false);

  const ButtonNext = async () => {
    if (!valueCheck && !Email) {
      setErrorCheck(true);
      setErrorValueEmpty(true);
      sethasNext(true);
    } else if (valueCheck && !Email) {
      setErrorValueEmpty(true);
      sethasNext(true);
    } else if (!valueCheck && Email) {
      setErrorCheck(true);
      sethasNext(true);
    } else if (!valueCheck) {
      setErrorCheck(true);
      sethasNext(true);
    } else if (!Email) {
      setErrorValueEmpty(true);
      sethasNext(true);
    } else {
      setErrorCheck(false);
      if (
        Email.includes('@') ||
        (/^-?[0-9]+(?:\.[0-9]+)?$/.test(Email) &&
          /^[0-9]{3,100}$/.test(Email.replace(/[.-]/g, '')))
      ) {
        navigation.navigate('SetUpPasswordPages', {Email: Email});
      } else {
        setErrorValueEmpty(true);
      }
    }
  };

  useEffect(() => {
    if (errorValueEmpty && Email.length > 0) {
      setErrorValueEmpty(false);
    }
  }, [Email]);

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
    errorValueEmpty,
    setErrorValueEmpty,
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
