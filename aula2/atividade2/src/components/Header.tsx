import { View, Image,Text } from "react-native"
import { Content, ProfilePicture,HeaderPhoto } from "./styles";

const Header= () => {
  return (
  
    <HeaderPhoto>
        <ProfilePicture source={{ uri: 'https://github.com/SteinMarcelo.png' }}></ProfilePicture>   
    </HeaderPhoto>
  )
}
export default Header;