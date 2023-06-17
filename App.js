import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import Route from "./src/routes/Tabs";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "./src/constants/Constants";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
      <NavigationContainer>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
        <Route />
      </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}
