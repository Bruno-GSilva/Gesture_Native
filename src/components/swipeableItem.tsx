import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const SwipeableItem = ({ item, onDelete }: any) => {
  const renderRightActions = (
    progress: any,
    dragX: {
      interpolate: (arg0: {
        inputRange: number[];
        outputRange: number[];
      }) => any;
    }
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [-20, 0, 100],
    });

    return (
      <>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <View style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SwipeableItem;
