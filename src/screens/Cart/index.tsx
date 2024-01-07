import { StyleSheet, Text, View } from 'react-native';

export default function Cart() {
   return (
      <View style={styles.container}>
         <Text>Cart screen</Text>
      </View>
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