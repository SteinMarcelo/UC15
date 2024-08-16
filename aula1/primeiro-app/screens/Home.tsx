import { Text,View } from "react-native";
import Post from "../components/Post";
import Footer from "../components/Footer";


const Home = () => {
  return <View>
    <Text>Meu título</Text>
    <Post title="Milena"/>
    <Post title="Milena"/>
    <Post title="Texto 3"/>
    <Post title="Texto 4"/>
    <Post title="Texto 5"/>
    <Footer/>

  </View>;
};


export default Home;

