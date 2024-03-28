import {FlatList, Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import styles from './CommentDicsoverDetail.styles';
import Text from '@atom/Text';
import {ColorsDark} from '@helpers/Color';
import {
  ChatBubbleBottomCenterTextIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
} from 'react-native-heroicons/solid';
import Comment from '@molecules/Comment';

const CommnetDiscoverDetail = () => {
  const [isSwitch, setIsSwitch] = useState(false);

  const Toogle = () => {
    setIsSwitch(!isSwitch);
  };

  const data = [{id: 1, data: [9, 10, 11]}, 2, 3, 4, 5, 6, 7, 8];

  const renderItem = ({item, index}) => {
    return <Comment item={item} />;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text fontFamily={'bold'}> 1 Replies</Text>
        <View style={styles.wrapperSwitch}>
          <Pressable onPress={Toogle}>
            <Text
              color={
                isSwitch ? ColorsDark.TEXT_MAIN : ColorsDark.TEXT_INACTIVE
              }>
              Most Recent
            </Text>
          </Pressable>
          <Text color={ColorsDark.TEXT_INACTIVE}>|</Text>
          <Pressable onPress={Toogle}>
            <Text
              color={
                !isSwitch ? ColorsDark.TEXT_MAIN : ColorsDark.TEXT_INACTIVE
              }>
              Most Relevant
            </Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 10,
              borderBottomColor: ColorsDark.PRIMARY_DISABLED,
              borderBottomWidth: 0.2,
              marginBottom: 10,
            }}></View>
        )}
        contentContainerStyle={{paddingBottom: 200}}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
  p;
};

export default CommnetDiscoverDetail;
