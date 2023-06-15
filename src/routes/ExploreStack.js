import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreYourCity from "../screens/appFlow/ExploreYourCity";
import { FontAwesome } from "@expo/vector-icons";

const ExploreNavigator = createStackNavigator();

const ExploreStack = () => {
  return (
    <ExploreNavigator.Navigator>
      <ExploreNavigator.Screen name="Explore" component={ExploreYourCity}   options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18
          },
          headerTintColor: "#ffffff",
          headerLeft: () => (
            <FontAwesome
              name="search-plus"
              size={20}
              color="#ffffff"
              style={{ marginLeft: 20,marginBottom:0 }}
            />
          ),
        }}/>
    </ExploreNavigator.Navigator>
  );
};

export default ExploreStack;
