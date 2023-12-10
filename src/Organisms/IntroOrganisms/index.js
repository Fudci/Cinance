import {Modal, Pressable, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import Images from '@helpers/Images';
import styles from './IntroOrganism.style';
import Text from '@atom/Text';
import Button from '@atom/Button';
import {ArrowRightIcon, XMarkIcon} from 'react-native-heroicons/solid';
import {storage} from '@helpers/Storage';
import {useNavigation} from '@react-navigation/native';
import Container from '@molecules/Container/Container';
import ModalCustom from '@molecules/ModalCustom';

const IntroOrganisms = () => {
  const navigation = useNavigation();
  const [modalLoginRegister, setmodalLoginRegister] = useState(false);
  const handleCryptoNovicePress = async () => {
    setmodalLoginRegister(true);
    // storage.set('@userChoice', 'Novice');
    // navigation.replace('LoginRegister');
  };

  const handleExperiencedUserPress = () => {
    setmodalLoginRegister(true);
    // storage.set('@userChoice', 'Experienced');
    // navigation.replace('LoginRegister');
  };

  return (
    <Container style={styles.container}>
      <FastImage
        resizeMode="contain"
        source={Images.QUESTION}
        style={styles.imageQuestion}
      />
      <View style={styles.wrapperText}>
        <Text fontFamily={'bold'} size={20}>
          Which Type of User Are You?
        </Text>
        <View style={styles.wrapperOption}>
          <UserOption
            title="Crypto Novice"
            description="Unfamiliar with crypto, buy or sell popular coins."
            onPress={handleCryptoNovicePress}
          />
          <UserOption
            title="Experienced User"
            description="Experienced in crypto, engage in complex trading functions."
            onPress={handleExperiencedUserPress}
          />
        </View>
      </View>
      <ModalCustom
        visible={modalLoginRegister}
        onPress={() => setmodalLoginRegister(false)}
      />
    </Container>
  );
};

const UserOption = ({title, description, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Button style={styles.Button(isDarkMode)} onPress={onPress}>
      <View style={{gap: 5, width: '90%'}}>
        <Text
          color={isDarkMode ? 'white' : '#1F252E'}
          fontFamily={'bold'}
          size={16}>
          {title}
        </Text>
        <Text size={14} color={'#AEB3BA'}>
          {description}
        </Text>
      </View>
      <View style={{width: '10%'}}>
        <ArrowRightIcon color={isDarkMode ? 'white' : 'black'} size={16} />
      </View>
    </Button>
  );
};

export default IntroOrganisms;
