import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Route from './src/routes/Tabs';
import InputWithoutBorders from './src/components/inputWithoutBoarders'
import CardWithDivider from './src/components/cardWithDivider'

export default function App() {
  return (
    <View style={{marginTop:70}}>
    <CardWithDivider />
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
