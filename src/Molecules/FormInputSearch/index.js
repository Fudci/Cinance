import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from '@atom/TextInput';
import {MagnifyingGlassIcon, XMarkIcon} from 'react-native-heroicons/solid';
import styles from './FormInput.styles';

const FormInputSearch = ({formName, valueForm, setValueForm}) => {
  const [active, setActive] = useState(false);
  const [erorActive, seterorActive] = useState(0);
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.PhoneActive}>
          <MagnifyingGlassIcon color={'white'} size={20} />
        </View>
        <TextInput
          erorActive={erorActive}
          setActiveTextinput={setActive}
          style={styles.containerTextinput}
          value={searchText}
          setvalueText={e => {
            setSearchText(e);
          }}
        />
        <Pressable
          onPress={() => {
            console.log('tes');
            setSearchText('');
          }}
          style={styles.MarkIcon}>
          {active && searchText?.length > 0 && (
            <XMarkIcon color={'white'} size={20} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default FormInputSearch;
