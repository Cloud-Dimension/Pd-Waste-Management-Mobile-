import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/authentication/Onboarding";
import Signup from "../screens/authentication/Signup";
import Login from "../screens/authentication/Login";
import OtpInput from "../screens/authentication/OTP";

const StackNavigator = createStackNavigator();

const AuthStack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown:false}}>
      <StackNavigator.Screen
        name="Onboarding"
        component={Onboarding}
      />
      <StackNavigator.Screen name="Signup" component={Signup} />
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Otp" component={OtpInput} />
    </StackNavigator.Navigator>
  );
};

export default AuthStack;
