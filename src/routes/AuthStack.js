import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/authentication/Onboarding";
import Signup from "../screens/authentication/Signup";
import Login from "../screens/authentication/Login";
import OtpInput from "../screens/authentication/OTP";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/Constants";
import Route from "./Tabs";
import ForgotPassoword from "../screens/authentication/ForgotPassoword";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Stack = createStackNavigator();

const AuthStack = () => {
  const { updateLoginStatus } = useContext(AuthContext);

  const onSkipPressed = (navigation) => {
    updateLoginStatus(true);
    navigation.navigate("Route");
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Add the HomeStack as a separate screen */}
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: true,
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={() => onSkipPressed(navigation)}>
                <Text style={{ marginRight: 20, fontSize: 17 }}>Skip</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: true,
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome
                name="chevron-left"
                size={20}
                color={COLORS.BLACK}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Route" component={Route} />
      <Stack.Screen
        name="ForgotPassoword"
        component={ForgotPassoword}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: true,
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome
                name="chevron-left"
                size={20}
                color={COLORS.BLACK}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
         <Stack.Screen
        name="Otp"
        component={OtpInput}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: true,
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome
                name="chevron-left"
                size={20}
                color={COLORS.BLACK}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
