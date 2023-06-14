import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreYourCity from "../screens/appFlow/ExploreYourCity";

const ExploreNavigator = createStackNavigator();

const ExploreStack = () => {
  return (
    <ExploreNavigator.Navigator>
      <ExploreNavigator.Screen name="Explore" component={ExploreYourCity} />
    </ExploreNavigator.Navigator>
  );
};

export default ExploreStack;
