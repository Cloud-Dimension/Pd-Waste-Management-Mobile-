import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreYourCity from "../screens/appFlow/ExploreYourCity";
import { FontAwesome } from "@expo/vector-icons";
import PostDetails from "../screens/appFlow/PostDetails";
import { View } from "react-native";
import { COLORS } from "../constants/Constants";
import { useNavigation } from '@react-navigation/native';

const ExploreNavigator = createStackNavigator();

const ExploreStack = () => {
  const navigation = useNavigation();
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
         <ExploreNavigator.Screen name="PostDetails" component={PostDetails}   options={{
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
            <View style={{ marginLeft: 10 }}>
              <FontAwesome
                name="chevron-left"
                size={20}
                color={COLORS.BACKGROUND_WHITE}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}/>
    </ExploreNavigator.Navigator>
  );
};

export default ExploreStack;
