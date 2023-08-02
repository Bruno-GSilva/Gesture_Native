import React from "react";
import { Alert, Text, View } from "react-native";
import { PressableButton } from "../UI/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const CustomHeader = () => {
  const { navigate } = useNavigation();

  const RedirectRouteDrinks = () => {
    return navigate("drinks");
  };
  const RedirectRouteHome = () => {
    return navigate("home");
  };

  const tap = Gesture.Tap().onStart(() => {
    console.log("tap");
  });

  return (
    <View
      className={`absolute z-30 w-full py-2 flex-row items-center justify-around bg-slate-500`}
    >
      <GestureHandlerRootView>
        <GestureDetector gesture={tap}>
          <PressableButton
            labelText="Comidas"
            className="flex-1 m-1"
            onPress={RedirectRouteDrinks}
          />
        </GestureDetector>
      </GestureHandlerRootView>
      <PressableButton
        labelText="Bebidas"
        className="flex-1 m-1"
        onPress={RedirectRouteHome}
      />
      <PressableButton labelText="Outros" className="flex-1 m-1" />
    </View>
  );
};
