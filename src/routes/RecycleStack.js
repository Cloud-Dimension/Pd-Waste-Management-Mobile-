import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Recycle from "../screens/appFlow/Recycle";

const RecycleNavigator = createStackNavigator();

const RecycleStack = () => {
  return (
    <RecycleNavigator.Navigator>
      <RecycleNavigator.Screen name="Recycle" component={Recycle} />
    </RecycleNavigator.Navigator>
  );
};

export default RecycleStack;
