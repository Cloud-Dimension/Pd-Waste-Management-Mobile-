import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Divider from "./divider";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Constants";

const Card = ({ iconName }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <FontAwesome
          name={iconName || "map-marker"}
          size={24}
          color={COLORS.PRIMARY}
          style={styles.icon}
        />
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            marginRight: 90,
          }}
        >
          <Text style={styles.leftCardTitle}>Arriving in</Text>
          <Text style={styles.leftCardSecondTitle}>10 min</Text>
        </View>
        <Text style={styles.rightCardTitle}>80 m away</Text>
      </View>
      <View style={styles.divider} />
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "column",
          marginRight: 90,
        }}
      >
        <View style={{ flexDirection: "column", marginTop: 5 }}>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <FontAwesome
              name={iconName || "map-marker"}
              size={22}
              color={COLORS.PRIMARY}
              style={styles.icon}
            />
            <Text style={styles.cardBody}>File a complaint</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <FontAwesome
              name={iconName || "map-marker"}
              size={22}
              color={COLORS.PRIMARY}
              style={styles.icon}
            />
            <Text style={styles.cardBody}>File a complaint</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
    height: 130,
    marginLeft: 20,
    marginRight: 20,
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
  },
  leftCardTitle: {
    marginRight: 5,
    fontWeight: "bold",
    color: "#aba9a6",
  },
  rightCardTitle: {
    fontWeight: "bold",
    color: "#0d0d0c",
  },
  leftCardSecondTitle: {
    fontWeight: "bold",
    color: "#0d0d0c",
  },
  cardBody: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#0d0d0c",
    fontSize: 13,
  },
});

export default Card;
