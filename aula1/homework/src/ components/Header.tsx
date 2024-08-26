
import { View, Text,Image, StyleSheet } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = () => {
    return (
        <View style={{ flexDirection: 'row',padding:15, alignItems: 'center'}}>
            
            <Image
        style={{ width: 40, height: 40, borderRadius: 20 }}
        source={{ uri: "https://github.com/SteinMarcelo.png" }}
      />
      <Text style={styles.text}>@SteinMarcelo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 16,
        margin: 'right',
    }
})

export default Header;