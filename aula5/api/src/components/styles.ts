import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const Title = styled.Text`
  font-size: 12;
  background-color: #f0f0f0;
  margin: 20px;
  flex: 1;
`;

export const ProfilePicture = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  max-width: 100%;
  border-color:#4b3399;
  border-width:5px;
`;

export const Content = styled.Text`
  font-size: 12px;
  color:#ffffff;
`;

export const SocialNetworks = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #4b3399;
`;

export const HeaderPhoto = styled.View`
 background-color: "black";
 justifyContent: "center";
 alignItems: "center" 
`;
