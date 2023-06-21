import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/authentication/Onboarding";
import Signup from "../screens/authentication/Signup";
import Login from "../screens/authentication/Login";
import OtpInput from "../screens/authentication/OTP";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/Constants";
import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Add the HomeStack as a separate screen */}
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="Login"
        component={Login}
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
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
                <Text style={{ marginRight: 20, fontSize: 17 }}>Skip</Text>
              </TouchableOpacity>
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
