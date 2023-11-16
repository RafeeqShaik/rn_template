import React from "react";

import { Box, Button, ButtonText } from "@gluestack-ui/themed";

import { useAuth } from "~/hooks/auth.hook";

// type ScreenProps = NativeStackScreenProps<AuthStackParams, "LoginScreen">;

const LoginScreen = () => {
  const { setAuthDetails } = useAuth();

  return (
    <Box
      justifyContent="flex-end"
      p="$10"
      pb="$12"
      alignItems="center"
      flex={1}
      rowGap="$4"
    >
      <Button
        size="lg"
        width="100%"
        variant="solid"
        action="positive"
        onPress={() => {
          setAuthDetails({
            mobileNumber: "1234567890",
            tokens: {
              accessToken: "yo_acessi",
              refreshToken: "yeh_refri",
            },
          });
        }}
      >
        <ButtonText> Press me to Login</ButtonText>
      </Button>
    </Box>
  );
};

export default LoginScreen;
