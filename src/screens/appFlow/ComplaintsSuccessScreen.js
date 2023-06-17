import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../../constants/Constants";
import { FontAwesome } from '@expo/vector-icons';
import WMButton from "../../components/WMButton";

const ComplaintsSuccessScreen = () => {
    const imagePath=require("../../../assets/images/banner(2).png")
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
         <FontAwesome name="check-circle" size={45} color="green" style={styles.leftIcon} />
        <Text style={styles.carouselText}>Your complaint has been filled</Text>
        <View  style={{ marginTop:100}}>
        <WMButton title={"Back"} color={COLORS.PRIMARY} width={150} />
        </View>
      </View>
    </View>
  );
};

export default ComplaintsSuccessScreen;

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
