import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Footer/>
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
