import { View, Image,Text } from "react-native"
import { Content, ProfilePicture } from "./styles";

const Header= () => {
  return (
    <View>
        <Content>Teste</Content>
        <ProfilePicture source={{ uri: 'https://github.com/SteinMarcelo.png' }}></ProfilePicture>
    </View>
  )
}
export default Header;