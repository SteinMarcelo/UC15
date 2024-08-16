import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
  <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
