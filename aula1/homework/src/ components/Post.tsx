import { Text, View, Image, StyleSheet } from "react-native";
import Footer from "./Footer";

interface PostProps {
  title: string;
}

const Post = ({ title }: PostProps) => {
  return (
    <View
      style={{
        marginVertical: 15,
        alignItems: "center",
        borderColor: "#ffff",
        width: "90%",
        paddingVertical: 8,
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <Image
        style={{ width: '100%', height:350 }}
        source={{ uri: "https://github.com/SteinMarcelo.png" }}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#f1f1f1f1",
  },
});

export default Post;
