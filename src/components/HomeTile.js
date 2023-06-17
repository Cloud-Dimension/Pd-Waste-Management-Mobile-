import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { COLORS } from "../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const HomeTile = ({ title, image, page }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(page)}
      style={styles.tileContainer}
    >
      <View>
        <Image source={image} style={styles.tileIcon} />
      </View>
      <Text style={styles.tileText}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default HomeTile;

const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
    height: 150,
    width:162, //to be fixed, N.B might not be responsive on other devices
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  tileText: {
    fontWeight: "500",
    color: COLORS.BLACK,
    marginBottom: 10,
  },
  tileIcon: {
    resizeMode: "contain",
    width: 80,
  },
});
