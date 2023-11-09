import React, { useCallback, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";

import Tabs from "./navigation/tabs";
import Calendario from "./screens/Calendario";
import Comunidad from "./screens/Comunidad";
import Notificaciones from "./screens/Notificaciones";
import Menu from "./screens/Menu";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return <Text>Cargando...</Text>;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Agregar"}
      >
        <Stack.Screen name="Agregar" component={Tabs} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="Comunidad" component={Comunidad} />
        <Stack.Screen name="Notificaciones" component={Notificaciones} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
