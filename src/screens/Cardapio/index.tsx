import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Text, View, FlatList } from "react-native";
import { CustomHeader } from "../../components/Header";
import { PressableButton } from "../../components/UI/Button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeableItem from "../../components/swipeableItem";

export const Cardapio = () => {
  const [data, setData] = useState([
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    // Adicione mais itens aqui
  ]);

  const handleDeleteItem = (itemId: any) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
  const { navigate } = useNavigation();

  const goDrinks = () => {
    return navigate("drinks");
  };

  return (
    <>
      <CustomHeader />
      <View className="flex-1 justify-center items-center bg-slate-800">
        <Text className="text-4xl fonte-bold text-white">Comidas</Text>
        <View className="flex-1">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SwipeableItem item={item} onDelete={handleDeleteItem} />
            )}
          />
        </View>
      </View>
    </>
  );
};
