// App.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import ExploreStack from "./ExploreStack";
import RecycleStack from "./RecycleStack";
import ProfileStack from "./ProfileStack";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Constants";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const TabNavigator = createBottomTabNavigator();

const Route = () => {
  const { currentUser, updateCurrentUser } = useContext(AuthContext);
  return (
    <>
      {!currentUser?.isLoggedIn ? (
        <AuthStack />
      ) : (
        <TabNavigator.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              let iconName;
              let color = COLORS.BLACK;

              if (route.name === "HomeTab") {
                iconName = focused ? "home" : "home";
                color = focused ? COLORS.PRIMARY : COLORS.BLACK;
              } else if (route.name === "ExploreTab") {
                iconName = focused ? "search" : "search";
                color = focused ? COLORS.PRIMARY : COLORS.BLACK;
              } else if (route.name === "RecycleTab") {
                iconName = focused ? "recycle" : "recycle";
                color = focused ? COLORS.PRIMARY : COLORS.BLACK;
              } else if (route.name === "ProfileTab") {
                iconName = focused ? "user" : "user";
                color = focused ? COLORS.PRIMARY : COLORS.BLACK;
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
    </>
  );
};

export default Route;
