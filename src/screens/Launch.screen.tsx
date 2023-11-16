import React from "react";

import { Box, Button, ButtonText, Heading } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParams } from "../types/navigator.types";

type ScreenProps = NativeStackScreenProps<AuthStackParams, "LaunchScreen">;
const LaunchScreen = ({ navigation }: ScreenProps) => {
  return (
    <Box justifyContent="center" alignItems="center" flex={1} rowGap="$4">
      <Heading>Launch Screen</Heading>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <ButtonText>Go to Login</ButtonText>
      </Button>
    </Box>
  );
};

export default LaunchScreen;
