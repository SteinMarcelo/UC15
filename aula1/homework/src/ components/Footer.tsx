
import { View, Text, StyleSheet } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const Footer = () => {
    return (
        <View>
            <Text style={styles.text}><AntDesign name="heart" size={24} color="grey" /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#f1f1f1",
        fontSize: 22,
    }
})

export default Footer;