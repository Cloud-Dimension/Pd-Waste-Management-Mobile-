import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/Constants";

const HelplineDetailsPage = (props) => {
  const params = props.route.params.item;
  console.log("pa", params);
  const contact = {
    name: "John Doe",
    cellNo: "123-456-7890",
    position: "Manager",
    altNumber: "987-654-3210",
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <FontAwesome
          name="user"
          size={24}
          color={COLORS.PRIMARY}
          style={styles.icon}
        />
        <View
          style={{
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <Text style={styles.leftCardSecondTitle}>
            {params.name} {params.surname}
          </Text>
        </View>
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
              name="phone-square"
              size={24}
              color={COLORS.PRIMARY}
              style={styles.icon}
            />
            <Text style={styles.cardBody}>{params.officeContact}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <FontAwesome
              name="phone-square"
              size={24}
              color={COLORS.PRIMARY}
              style={styles.icon}
            />
            <Text style={styles.cardBody}>{params.alternativeNumber}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <FontAwesome
              name="briefcase"
              size={24}
              color={COLORS.PRIMARY}
              style={styles.icon}
            />
            <Text style={styles.cardBody}>{params.position}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HelplineDetailsPage;

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
    height: 160,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  divider: {
    height: 1,
    backgroundColor: "#aba9a6",
  },
  cardTitleContainer: {
    flexDirection: "row",
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
    marginLeft: 10,
  },
  cardBody: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#0d0d0c",
    fontSize: 13,
  },
});
