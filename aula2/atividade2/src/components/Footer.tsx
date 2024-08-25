import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Title } from "./styles";

const Footer = () => {
  return (
    <View>
      <Title>@Marcelo_Steinhaus</Title>
      <TouchableOpacity onPress={() => alert("Me siga para mais dicas")}>
        <AntDesign name="rightcircle" size={24} color="#25252" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
