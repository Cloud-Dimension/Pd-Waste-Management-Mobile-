import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { COLORS } from "../constants/Constants";

const WMButton = ({ title, color, width,onClick }) => {
  return (
    <Button
      title={title}
      color={color ?? COLORS.PRIMARY}
      buttonStyle={{ width: width, borderRadius: 5 }}
      onPress={onClick}
    />
  );
};

export default WMButton;
