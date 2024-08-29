import { View, SafeAreaView } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Header></Header>
      <Footer></Footer>
    </View>
  );
};

export default Home;
