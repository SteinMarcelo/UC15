import { View, Image,Text } from "react-native"

const Foto = () => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: "https://github.com/SteinMarcelo.png" }}
      />
    </View>
  )
}
export default Foto;

