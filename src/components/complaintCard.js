import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ComplaintCard = ({ complainType, complaintCount, complainTypeIconName,page }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableWithoutFeedback onPress={() =>{navigation.navigate(page)}} style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row",alignItems:'center' }}>
            <FontAwesome
              name={complainTypeIconName || "map-marker"}
              size={23}
              style={styles.leftIcon}
            />
            <Text style={styles.complaintText}>
              {complainType || "File a Complain"}
            </Text>
          </View>
          {complaintCount > 0 ? (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: COLORS.SECONDARY,
                borderRadius: 10,
              }}
            >
              <Text style={styles.complaintCount}>{complaintCount || 0}</Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: COLORS.BACKGROUND_WHITE,
                borderRadius: 10,
              }}
            >
              <Text style={styles.complaintCount}>{complaintCount}</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ComplaintCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: COLORS.GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
    padding: 10,
    height: 45,
    marginLeft: 20,
    marginRight: 20,
    width: 350,
  },
  leftIcon: {
    //marginRight: 0,
    //borderRadius: 6,
    color: COLORS.SECONDARY,
  },
  complaintText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    marginRight: 10,
  },
  complaintCount: {
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 10,
    marginRight: 10,
  },
});
