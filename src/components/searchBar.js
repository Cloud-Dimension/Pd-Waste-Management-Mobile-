import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ placeholder }) => {
  const defaultPlaceholder = "Search";
  return (
    <View style={styles.container}>
      <FontAwesome
        name="search"
        size={20}
        color="gray"
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder || defaultPlaceholder}
      />
    </View>
  );
};

export default SearchBar;

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
