import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = ({style}) => {
  return <View style={styles.divider|| style} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "gray",
    width:300,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:40,
    marginRight:30,

  },
});
