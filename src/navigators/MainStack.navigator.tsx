import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/ProductDetails.screen";
import { MainStackParams } from "../types/navigator.types";
import HomeTabsScreens from "./HomeTabs.navigator";

const MainStack = createNativeStackNavigator<MainStackParams>();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerLargeTitleStyle: {
          fontSize: 24,
        },
      }}
    >
      <MainStack.Screen
        name="HomeTabs"
        component={HomeTabsScreens}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "My Profile",
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
