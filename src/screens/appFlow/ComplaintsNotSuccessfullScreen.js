import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../../constants/Constants";
import { FontAwesome } from "@expo/vector-icons";
import WMButton from "../../components/WMButton";

const ComplaintsNotSuccessfullScreen = () => {
  const imagePath = require("../../../assets/images/banner(2).png");
  const message =
    "        This complaint has already \n been registered and is under process";
  return (
    <View style={styles.sliderImageView}>
      <Image source={imagePath} style={{}} />
      <View
        style={{
          marginTop: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="times-circle"
          size={45}
          color="red"
          style={styles.leftIcon}
        />
        <Text style={styles.carouselText}>{message}</Text>
        <View style={{ marginTop:100}}>
          <WMButton title={"Back"} color={COLORS.PRIMARY} width={150} />
        </View>
      </View>
    </View>
  );
};

export default ComplaintsNotSuccessfullScreen;

const styles = StyleSheet.create({
  sliderImageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselTitle: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: 19,
    MarginTop: 0,
  },
  carouselText: {
    color: COLORS.GREY,
    fontSize: 15,
    marginTop: 30,
    fontWeight: "750",
  },
});
