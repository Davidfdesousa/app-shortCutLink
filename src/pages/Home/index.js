import React from "react";
import { View, Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import {
  BoxIcon,
  ButtonLink,
  ButtonLinkText,
  ContainerContent,
  ContainerInput,
  ContaninerLogo,
  Input,
  Logo,
  Subtitle,
  Title,
} from "./styles";

import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <LinearGradient
      colors={["#1ddbb9", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBarPage barStyle="light-content" backgroundColor="#1ddbb9" />

      <Menu />

      <ContaninerLogo>
        <Logo
          source={require("../../assets/logo.png")}
          resizeMode={"contain"}
        />
      </ContaninerLogo>

      <ContainerContent>
        <Title>Link</Title>
        <Subtitle>Cole seu link para encurtar</Subtitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name={"link"} color="#fff" size={22} />
          </BoxIcon>
          <Input
            placeholder="Cole seu link aqui ..."
            placeholderTextColor="#fff"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar Link </ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  );
}
