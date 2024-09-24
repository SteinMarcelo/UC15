import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // O View principal ocupa a tela inteira
  },
});
