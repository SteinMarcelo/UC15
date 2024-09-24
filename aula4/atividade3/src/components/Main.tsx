import { Alert, Platform, Text, TouchableOpacity, View } from "react-native";
import User from "./User";
import { LoginBlock, LoginButton, LoginView, TitleAllign } from "./style";
import Password from "./Password";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { SetStateAction, useState } from "react";

interface IStorage {
  username: string;
  password: string;
}

export const Main = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const storeData = async (value: IStorage) => {
    const jsonValue = JSON.stringify(value);

    if (Platform.OS !== "web") {
      try {
        await AsyncStorage.setItem("hooks-userInfo", jsonValue);
      } catch (e) {}
    } else {
      localStorage.setItem("@hooks-userInfo", jsonValue);
    }
  };

  const showLogedAlert = () => {
    storeData({ username: user, password: password });

    Alert.alert("Atenção!!!", `Nome: ${user} ${password}`, [
      { text: "legal!!!", onPress: () => console.log("Apertou o botão") },
    ]);
  };

  return (
    <LoginBlock>
      <TitleAllign>
        <Text>Login:</Text>
      </TitleAllign>
      <LoginView>
        <User user={user} setUser={setUser} />
      </LoginView>
      <TitleAllign>
        <Text>Senha:</Text>
      </TitleAllign>
      <LoginView>
        <Password password={password} setPassword={setPassword} />
      </LoginView>
      <TouchableOpacity onPress={showLogedAlert}>
        <LoginButton>
          <Text>Login</Text>
        </LoginButton>
      </TouchableOpacity>
    </LoginBlock>
  );
};
