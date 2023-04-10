import { Button,Avatar, Menu, Divider, Provider,Card, Text, FAB, Portal } from 'react-native-paper';
import *as React from 'react'
import { View, StyleSheet } from 'react-native';

const Fab = () => {

    const onStateChange = ({ open }) => setState({ open });
    const [state, setState] = React.useState({ open: false });
    const { open } = state;
    return(
      

<Portal>
<FAB.Group
    style ={{position: 'absolute', paddingRight: 5, paddingBottom:60}}
  open={open}
  visible
  icon={open ? 'format-list-bulleted' : 'plus'}
  actions={[
    
    {
      icon: 'account',
      label: '마이페이지',
      onPress: () => console.log('Pressed star'),
    },
    {
      icon: 'cards-heart',
      label: '찜 보기',
      onPress: () => console.log('Pressed email'),
    },
    {
      icon: 'pencil',
      label: '글쓰기',
      onPress: () => console.log('Pressed notifications'),
    },
  ]}
  onStateChange={onStateChange}
  onPress={() => {
    if (open) {
      // do something if the speed dial is open
    }
  } } />
</Portal>

    )
}

export default Fab;