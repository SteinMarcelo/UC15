import { Text, StyleSheet } from "react-native";
import Post from "../ components/Post";
import Footer from "../ components/Footer";
import { SafeAreaView } from "react-native";

const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <Post title="SteinMarcelo" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#f1f1f1",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;
