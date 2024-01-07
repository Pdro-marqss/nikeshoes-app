import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
// import Loading;

import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({ Anton_400Regular, Poppins_300Light, Poppins_400Regular });

  return (
    <>
      {/* {fontsLoaded ? <Routes /> : <Loading />} */}
      {fontsLoaded ? <Routes /> : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Não renderizou as fontes</Text></View>}
      <StatusBar style='dark' />
    </>
  );
}
