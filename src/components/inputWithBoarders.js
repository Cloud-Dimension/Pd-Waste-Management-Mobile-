import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputWithBoarders = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
      />
    </View>
  );
};

export default InputWithBoarders;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#ebebeb'
  },
  textInput: { flex: 1, height: 40, paddingHorizontal: 10 },
  iconStyle: { marginHorizontal: 10 },
});
