import { TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "~/screens/Home.screen";
import SettingsScreen from "~/screens/Settings.screen";

const Tab = createBottomTabNavigator();

const HomeTabsScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 10,
              padding: 5,
            }}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <MaterialCommunityIcons name="account" color="black" size={26} />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          title: "Yo Yo App",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsScreens;
