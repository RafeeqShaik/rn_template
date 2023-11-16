import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "~/hooks/auth.hook";

import AuthStackScreens from "./src/navigators/AuthStack.navigator";
import MainStackScreens from "./src/navigators/MainStack.navigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
//
const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the Navigation container is ready
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer onReady={onLayoutRootView}>
        {!isAuthenticated ? <AuthStackScreens /> : <MainStackScreens />}
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
