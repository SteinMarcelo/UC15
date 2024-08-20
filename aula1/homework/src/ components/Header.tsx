
import { View, Text, StyleSheet } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = () => {
    return (
        <View>
            <Text style={styles.text}>@SteinMarcelo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#f1f1f1",
        fontSize: 11,
    }
})

export default Header;