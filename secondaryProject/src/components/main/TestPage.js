import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {SignUpModal} from '../modal/SignUpModal';
import {Text, View} from 'react-native';
import { Portal, Provider } from 'react-native-paper';


export default function TestPage() {
  return (
    <Portal>
      <Provider>
     <View>
      <Text>asd</Text>
    </View>
    </Provider>
    </Portal>
   
  );
};
