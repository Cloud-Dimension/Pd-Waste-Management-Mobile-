import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Recycle from "../screens/appFlow/Recycle";
import { FontAwesome } from "@expo/vector-icons";

const RecycleNavigator = createStackNavigator();

const RecycleStack = () => {
  return (
    <RecycleNavigator.Navigator>
      <RecycleNavigator.Screen name="Recycle" component={Recycle}   options={{
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
              name="rotate-right"
              size={20}
              color="#ffffff"
              style={{ marginLeft: 20,marginBottom:0 }}
            />
          ),
          
        }}/>
    </RecycleNavigator.Navigator>
  );
};

export default RecycleStack;
