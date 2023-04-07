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
    style ={{position: 'absolute', paddingRight:5, paddingBottom:60}}
  open={open}
  visible
  icon={open ? 'calendar-today' : 'plus'}
  actions={[
    { icon: 'plus', onPress: () => console.log('Pressed add') },
    {
      icon: 'star',
      label: 'Star',
      onPress: () => console.log('Pressed star'),
    },
    {
      icon: 'email',
      label: 'Email',
      onPress: () => console.log('Pressed email'),
    },
    {
      icon: 'bell',
      label: 'Remind',
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