import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Certifique-se de usar a importação correta
import { SocialNetworks } from "./styles";

const Footer = () => {
  return (
      <SocialNetworks>
          <TouchableOpacity onPress={() => alert("Me siga para mais dicas")} style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
            <AntDesign name="linkedin-square" size={50} color="#252525" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Me siga para mais dicas")} style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>  
            <AntDesign name="instagram" size={50} color="#252525" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Me siga para mais dicas")} style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>  
            <AntDesign name="github" size={50} color="#252525" />
          </TouchableOpacity>
      </SocialNetworks>
  );
};

export default Footer;
