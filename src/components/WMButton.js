import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { COLORS } from "../constants/Constants";

const WMButton = ({ title, color, width,onClick,titleStyle }) => {
  return (
    <Button
      title={title}
      color={color ?? COLORS.PRIMARY}
      buttonStyle={{ width: width, borderRadius: 5 }}
      onPress={onClick}
      titleStyle={titleStyle}
    />
  );
};

export default WMButton;
