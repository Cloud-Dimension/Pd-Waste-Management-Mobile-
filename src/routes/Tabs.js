// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import ExploreStack from "./ExploreStack";
import RecycleStack from "./RecycleStack";
import ProfileStack from "./ProfileStack";
import { FontAwesome } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator();

const Route = ({ isLoggedIn }) => {
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthStack />
      ) : (
        <TabNavigator.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              let iconName;
              let color = "#252525";

              if (route.name === "HomeTab") {
                iconName = focused ? "home" : "home";
                color = focused ? "#2CAC69" : "#252525";
              } else if (route.name === "ExploreTab") {
                iconName = focused ? "search" : "search";
                color = focused ? "#2CAC69" : "#252525";
              } else if (route.name === "RecycleTab") {
                iconName = focused ? "recycle" : "recycle";
                color = focused ? "#2CAC69" : "#252525";
              } else if (route.name === "ProfileTab") {
                iconName = focused ? "user" : "user";
                color = focused ? "#2CAC69" : "#252525";
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
          })}
        >
          <TabNavigator.Screen name="HomeTab" component={HomeStack} />
          <TabNavigator.Screen name="ExploreTab" component={ExploreStack} />
          <TabNavigator.Screen name="RecycleTab" component={RecycleStack} />
          <TabNavigator.Screen name="ProfileTab" component={ProfileStack} />
        </TabNavigator.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Route;
