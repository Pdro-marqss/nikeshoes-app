import { StyleSheet, Text, View, TextInput } from 'react-native';

import { DismissKeyboard } from '../../utils/dismissKeyboard';

export default function Discover() {
   return (
      <DismissKeyboard>
         <View style={styles.container}>
            <Text>Discover screen</Text>
            <TextInput style={{ borderWidth: 1, height: 56, width: '80%', padding: 16 }} />
         </View>
      </DismissKeyboard>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});