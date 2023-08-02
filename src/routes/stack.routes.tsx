import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { Cardapio } from "../screens/Cardapio";
import { Bebidas } from "../screens/Bebidas";
import { CustomHeader } from "../components/Header";

export const StackNavigator = createNativeStackNavigator();

export default function Routes() {
  const { Group, Screen, Navigator } = StackNavigator;

  const CustomScreen: NativeStackNavigationOptions = {
    header: CustomHeader,
    // headerShown:false,
    animation: "slide_from_right",
  };

  return (
    <Navigator screenOptions={CustomScreen}>
      <Screen
        name="home"
        options={{ headerTitle: "Comidas" }}
        component={Cardapio}
      />
      <Screen
        name="drinks"
        options={{ headerTitle: "Bebidas", presentation: "card", orientation:"portrait_up" }}
        component={Bebidas}
      />
    </Navigator>
  );
}
