import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Presentation } from "../components/Presentation";

const Home = () => {
  return (
    <SafeAreaView style={{alignItems:"center", backgroundColor:"#272727"}}>
      <Header></Header>
      <Presentation></Presentation>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Home;
