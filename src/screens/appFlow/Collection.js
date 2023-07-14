import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/Constants";
import { Divider } from "@rneui/base";
import AppView from "../../components/AppView";

const Collection = () => {
  const dummyData = [
    {
      day: "Monday",
      Status: "collecting",
      time: "10:00 AM  - 10:30 AM",
    },
    {
      day: "Tuesday",
      Status: "collecting",
      time: "10:00 AM  - 10:30 AM",
    },
    {
      day: "Wednesday",
      Status: "notcollecting",
      time: "10:00 AM",
    },
    {
      day: "Thursdays",
      Status: "collecting",
      time: "2:00 PM - 2:30 PM",
    },
    {
      day: "Friday",
      Status: "collecting",
      time: "10:00 AM  - 10:30 AM",
    },
    {
      day: "Public Holidays",
      Status: "notcollecting",
      time: "2:00 PM",
    },
  ];

  const windowWidth = Dimensions.get("window").width; // Get the width of the device window

  return (
    <AppView>
        <Image
          source={require("../../../assets/images/collection.png")}
          style={{ width: '100%', height: 200,marginTop:15}} // Set the image width to the device window width
        />

      <View style={styles.scheduleCard}>
        <View style={styles.cardTitleContainer}>
          <View style={styles.scheduleDayContainer}>
            <Text style={styles.leftCardSecondTitle}>Day</Text>
          </View>
          <View>
            <Text style={styles.leftCardSecondTitle}>Expected Time slot</Text>
          </View>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10, width:windowWidth }} /> 
        {dummyData.map((data, index) => (
          <View key={index} style={styles.scheduleRow}>
            <View style={styles.scheduleDayContainer}>
              <View style={{paddingRight:15,paddingLeft: 15,marginLeft: 0,}}>
              <Text style={styles.scheduleDay}>{data.day}</Text>
              </View>
          
              <Divider style={{ marginTop: 10, marginBottom: 10, width: windowWidth, marginRight: 80 }} />
            </View>
            
            <View style={styles.iconContainer}>
              {data.Status === "collecting" ? (
                <FontAwesome
                  name="check"
                  size={20}
                  color={COLORS.PRIMARY}
                  style={styles.icon}
                />
              ) : (
                <FontAwesome
                  name="times"
                  size={20}
                  color='red'
                  style={styles.icon}
                />
              )}
            </View>
            <View style={styles.scheduleTimeContainer}>
              {data.Status === "notcollecting" ? (
                <Text style={styles.scheduleTime}>Not Collect</Text>
              ) : (
                <Text style={styles.scheduleTime}>{data.time}</Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </AppView>
  );
};

export default Collection;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
  },
  scheduleCard: {
    marginTop: 10,
    padding: 0,
    
  },
  cardTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight:15,
    paddingLeft: 15
  },
  scheduleRow: {
    flexDirection: "row",
    marginTop: 5,
    
  },
  scheduleDayContainer: {
    flex: 1,
    marginLeft: 0,
  },
  iconContainer: {
    width: 20,
    paddingRight:15,
    paddingLeft: 15
  },
  scheduleTimeContainer: {
    flex: 1,
    //marginRight: 10,
    alignItems: "flex-end",
    paddingRight:15,
    paddingLeft: 15
  },
  icon: {
    marginBottom: 5,
    justifyContent: "center",
    width: 20,
  },
  leftCardSecondTitle: {
    fontWeight: "bold",
    color: "gray",
    // marginLeft: 20,
    // marginRight: 20,
  },
  scheduleTime: {
    fontWeight: "500",
    color: COLORS.GREY,
    fontSize: 13,
  },
  scheduleDay: {
    fontWeight: "bold",
    color: COLORS.BLACK,
    fontSize: 13,
  },
});
