import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Divider from "./divider";

const InputWithoutBorders = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
    </View>
  );
};

export default InputWithoutBorders;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    
  },
  textInput: { flex: 1, height: 40, paddingHorizontal: 10 ,borderBottomWidth:1, borderColor: "gray",},
});
