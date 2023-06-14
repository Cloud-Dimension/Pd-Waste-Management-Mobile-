import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/appFlow/Profile";

const ProfileNavigator = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileNavigator.Navigator>
      <ProfileNavigator.Screen name="Profile" component={Profile} />
    </ProfileNavigator.Navigator>
  );
};

export default ProfileStack;
