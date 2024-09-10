import { Text, View } from "react-native";
import User from "./User";
import { LoginBlock, LoginView, TitleAllign } from "./style";
import Password from "./Password";

export const Main = () => {
  return (
    <LoginBlock>
      <TitleAllign>
        <Text>Login:</Text>
      </TitleAllign>
      <LoginView>
        <User></User>
      </LoginView>
      <TitleAllign>
        <Text>Senha:</Text>
      </TitleAllign>
      <LoginView>
        <Password></Password>
      </LoginView>
    </LoginBlock>
  );
};
