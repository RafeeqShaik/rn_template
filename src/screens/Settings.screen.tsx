import React from "react";

import { Box, Button, ButtonText } from "@gluestack-ui/themed";

import { useAuth } from "~/hooks/auth.hook";

const SettingsScreen = () => {
  const { resetAuthDetails } = useAuth();
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
        variant="outline"
        action="negative"
        onPress={resetAuthDetails}
      >
        <ButtonText> Logout</ButtonText>
      </Button>
    </Box>
  );
};

export default SettingsScreen;
