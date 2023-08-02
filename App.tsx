import "react-native-gesture-handler";

import Routes from "./src/routes/stack.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
  );
}
