import { Text, View, Image, StyleSheet } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

interface PostProps {
  title: string;
}

const Post = ({ title }: PostProps) => {
  return (
    <View
      style={{
        marginVertical: 15,
        borderColor: "#ffff",
        width: "90%",
        paddingVertical: 8,
      }}
    >
      <Header></Header>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: "https://github.com/SteinMarcelo.png" }}
      />
      <View style={{ flexDirection: 'row',padding:15, alignItems: 'center'}}>
        <Footer />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: "#f1f1f1f1",
  },
});

export default Post;
