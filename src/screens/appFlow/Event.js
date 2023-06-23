import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/Constants";
import { Divider } from "@rneui/base";

const Events = () => {
  const dummyData = [
    {
      day: "Monday",
      Status: "collecting",
      time: "10:00PM",
    },
    {
      day: "Tuesday",
      Status: "notcollecting",
      time: "2:00 PM",
    },
    {
      day: "Wednesday",
      Status: "notcollecting",
      time: "10:00 AM",
    },
    {
      day: "Thursdays",
      Status: "notcollecting",
      time: "2:00 PM",
    },
    {
      day: "Friday",
      Status: "notcollecting",
      time: "2:00 PM",
    },
    {
      day: "Public Holidays",
      Status: "notcollecting",
      time: "2:00 PM",
    },
  ];

  return (
    <View style={styles.card}>
      <View>
        <Image
          source={require("../../../assets/images/truckColl.jpg")}
          style={{ width: 400, height: 200 }}
        />
      </View>

      <View style={styles.scheduleCard}>
        <View style={styles.cardTitleContainer}>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.leftCardSecondTitle}>Day</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={styles.leftCardSecondTitle}>Time</Text>
          </View>
        </View>
        <Divider style={{ marginTop: 5, marginBottom: 5 }} />
        {dummyData.map((data, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.scheduleDay}>{data.day}</Text>
              </View>
              <View style={{ width: 20, alignItems: "center" }}>
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
                    color={COLORS.PRIMARY}
                    style={styles.icon}
                  />
                )}
              </View>
              <View>
                {data.Status === "notcollecting" ? (
                  <Text style={styles.scheduleTime}>Not Collect</Text>
                ) : (
                  <Text style={styles.scheduleTime}>{data.time}</Text>
                )}
              </View>
            </View>
            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
  },
  scheduleCard: {
    marginTop: 10,
    padding: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#aba9a6",
  },
  cardTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 0,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 20, 

  },
  leftCardSecondTitle: {
    fontWeight: "bold",
    color: "#0d0d0c",
    marginLeft: 10,
  },
  scheduleTime: {
    fontWeight: "500",
    color: COLORS.GREY,
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  scheduleDay: {
    marginLeft: 10,
    fontWeight: "bold",
    color: COLORS.BLACK,
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});
