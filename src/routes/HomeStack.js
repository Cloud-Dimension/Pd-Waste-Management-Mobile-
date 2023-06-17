import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/appFlow/Home";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Constants";
import SearchBar from "../components/searchBar";
import { View, StyleSheet, Text } from "react-native";
import Complains from "../screens/appFlow/Complains";
import Map from "../screens/appFlow/Map";
import Helpline from "../screens/appFlow/Helpline";
import Bins from "../screens/appFlow/Bins";
import Collection from "../screens/appFlow/Collection";
import Events from "../screens/appFlow/Event";
import ComplainDetails from "../screens/appFlow/ComplainDetails";
import PrevComplains from "../screens/appFlow/PrevComplains";

const HomeNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
            borderRadius: 25,
            height: 130,
          },
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <View style={styles.iconsContainer}>
                <FontAwesome
                  name="map-marker"
                  size={28}
                  color={COLORS.BACKGROUND_WHITE}
                  style={styles.icon}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.locationTitle}>Choose Location</Text>
                  <Text style={{ color: COLORS.BACKGROUND_WHITE }}>
                    265 West Avenue
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: "red",
                      borderRadius: 20,
                      alignItems: "center",
                      width: 17,
                      height: 16,
                      position: "absolute",
                      left: 14,
                      top: 23,
                      zIndex: 12,
                      borderWidth: 1,
                      borderColor: COLORS.LIGHTGREY,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 10 }}>2</Text>
                  </View>
                  <FontAwesome
                    name="bell-o"
                    size={28}
                    color={COLORS.BACKGROUND_WHITE}
                    style={styles.icon}
                  />
                </View>
              </View>
              {/* <View style={styles.searchBarContainer}>
                <SearchBar />
              </View> */}
            </View>
          ),
          headerTintColor: COLORS.BACKGROUND_WHITE,
        }}
      />
      <HomeNavigator.Screen
        name="map"
        component={Map}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <HomeNavigator.Screen
        name="complaints"
        component={Complains}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <HomeNavigator.Screen
        name="helpline"
        component={Helpline}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <HomeNavigator.Screen
        name="events"
        component={Events}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <HomeNavigator.Screen
        name="collection"
        component={Collection}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <HomeNavigator.Screen
        name="bins"
        component={Bins}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <HomeNavigator.Screen
        name="fileComplain"
        component={ComplainDetails}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
          headerTitle:'Complaint Form'
        }}
      />
      <HomeNavigator.Screen
        name="prevComplaints"
        component={PrevComplains}
        options={{
          headerStyle: {
            backgroundColor: "#2CAC69",
            borderRadius: 25,
            height: 110,
          },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
          headerTitle:'Previous Complaints'
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
    width: 300,
    marginLeft: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
    marginTop: 20,
  },
  locationTitle: {
    fontWeight: "bold",
    color: COLORS.BACKGROUND_WHITE,
    marginRight: 150,
    marginTop: 20,
  },
});
