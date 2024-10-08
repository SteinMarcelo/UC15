import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Footer = () => {
  const [liked, setLikedState] = useState(false);
  return (
    <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
      <TouchableOpacity onPress={()=> setLikedState(!liked)}>
        {liked && <AntDesign name="heart" size={24} color="red" />}
        {!liked && <AntDesign name="heart" size={24} color="grey" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#f1f1f1",
    fontSize: 22,
  },
});

export default Footer;
