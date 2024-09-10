import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"
import { FooterFix } from "../components/style";


export const Home = () => {
    return (
        <SafeAreaView style={{alignItems:"center", backgroundColor:"#fff"}}>
        <Header></Header>
        <Main></Main>
        <FooterFix>
        <Footer></Footer>
        </FooterFix>
        </SafeAreaView>
    )
} 