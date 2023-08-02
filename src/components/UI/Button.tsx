import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { styled } from "nativewind";

interface ButtonProps extends PressableProps {
  labelText: string;
  rest?: string;
}

function Button({ labelText, ...rest }: ButtonProps) {
  return (
    <Pressable
      className="px-4 py-2 border-2 border-white justify-center items-center rounded-md my-2 shadow-2xl"
      {...rest}
    >
      <Text className="text-sm font-bold text-white">{labelText}</Text>
    </Pressable>
  );
}
export const PressableButton = styled(Button);
