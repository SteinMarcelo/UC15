import { Text, StyleSheet } from "react-native";
import Post from "../ components/Post";
import Footer from "../ components/Footer";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Post title="@SteinMarcelo" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;
