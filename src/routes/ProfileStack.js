import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/appFlow/Profile";
import { FontAwesome } from "@expo/vector-icons";

const ProfileNavigator = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileNavigator.Navigator>
      <ProfileNavigator.Screen name="My Profile" component={Profile} options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
            fontWeight:'20'
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18
          },
          headerTintColor: "#ffffff",
          headerLeft: () => (
            <FontAwesome
              name="user-o"
              size={20}
              color="#ffffff"
              style={{ marginLeft: 20,marginBottom:0 }}
            />
          ),
        }}/> 
    </ProfileNavigator.Navigator>
  );
};

export default ProfileStack;
