import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/appFlow/Home";

const HomeNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name="Home" component={Home} />
    </HomeNavigator.Navigator>
  );
};

export default HomeStack;
