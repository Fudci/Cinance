import {View, Image} from 'react-native';
import React, {memo} from 'react';
import Text from '@atom/Text';
import {
  ChatBubbleBottomCenterTextIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
} from 'react-native-heroicons/solid';
import styles from './Comment.styles';
import {ColorsDark} from '@helpers/Color';
import {FlatList} from 'react-native-gesture-handler';
import CommentChild from '@molecules/CommentChild';
import {SCREEN_WIDTH} from '@helpers/Responsive';

const Comment = ({item, index}) => {
  const renderItem = ({item, index}) => {
    return <CommentChild />;
  };

  return (
    <View>
      <View style={styles.listComment}>
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7151807.jpg&f=1&nofb=1&ipt=32811078477782a54cb92ea16a752516d1d62a6e9eb8ab6b9f85255805171eda&ipo=images',
          }}
          style={{width: 50, height: 50, borderRadius: 50 / 2}}
        />
        <View style={{flex: 1}}>
          <View style={styles.rowbottomComment}>
            <Text fontFamily={'bold'}>Jon Doddde</Text>
            <EllipsisHorizontalIcon
              size={20}
              color={ColorsDark.TEXT_INACTIVE}
            />
          </View>
          <Text>
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
          <View style={styles.rowbottomComment}>
            <View style={styles.rowbottomComment}>
              <Text color={ColorsDark.TEXT_INACTIVE}>4 m</Text>
              <Text>See translation</Text>
            </View>
            <View style={styles.rowbottomComment}>
              <ChatBubbleBottomCenterTextIcon
                size={20}
                color={ColorsDark.TEXT_INACTIVE}
              />
              <HandThumbUpIcon size={20} color={ColorsDark.TEXT_INACTIVE} />
            </View>
          </View>
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
        style={{marginLeft: SCREEN_WIDTH * 0.12, marginTop: 10}}
        data={item?.data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(Comment);
