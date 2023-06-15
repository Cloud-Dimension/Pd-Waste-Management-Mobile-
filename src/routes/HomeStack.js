import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/appFlow/Home";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "../constants/Constants";
import SearchBar from '../components/searchBar';
import { View, StyleSheet,Text } from 'react-native';

const HomeNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 170,
          },
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <View style={styles.iconsContainer}>
                <FontAwesome
                  name="map-marker"
                  size={28}
                  color="#ffffff"
                  style={styles.icon}
                />
                <View style={{flexDirection:'column'}}>
                <Text style={styles.locationTitle}>Choose Location</Text>
                <Text style={{color:'#ffffff'}}>265 West Avenue</Text>
                </View>
                 <FontAwesome
                  name="bell-o"
                  size={28}
                  color="#ffffff"
                  style={styles.icon}
                />
              </View>
              <View style={styles.searchBarContainer}>
                <SearchBar />
              </View>
            </View>
          ),
          headerTintColor: "#ffffff",
        }}
      />
    </HomeNavigator.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
    flex: 1,
  },
  searchBarContainer: {
    marginBottom: 0,
    width:300,
    marginLeft:5
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom:15
  },
  icon: {
    marginRight: 10,
    marginTop: 20,
  },
  locationTitle: {
    fontWeight:'bold',
    color: "#ffffff",
    marginRight:150,
    marginTop:20
  },
});
