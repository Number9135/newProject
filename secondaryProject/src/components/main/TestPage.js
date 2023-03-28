import * as React from 'react';
import { BottomNavigation, Text, Avatar, Button, Card, TextInput } from 'react-native-paper';

const OnedayRoute = () => <Text></Text>

const NoteRoute = () => <Text>Albums</Text>;

const MessageRoute = () => 
<Card>
  <Card.Title title="누군가에게 보내는" subtitle="응원의 메세지" left={LeftContent} />
    <Card.Content>
     <Text variant="titleLarge">소중한 사람에게..</Text>
  </Card.Content>
<Card>
  <TextInput></TextInput>
</Card>
<Card.Actions>
  <Button onPress={()=>{}}>취소</Button>
  <Button onPress={()=>{}}>보내기</Button>
</Card.Actions>
</Card>;;

const MypageRoute = () => <Text>Notifications</Text>;

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'oneday', title: '하루1분', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'note', title: '글귀', focusedIcon: 'album' },
    { key: 'message', title: '메세지', focusedIcon: 'history' },
    { key: 'mypage', title: '마이페이지', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    oneday: OnedayRoute,
    note: NoteRoute,
    message: MessageRoute,
    mypage: MypageRoute,
  });

  

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;





