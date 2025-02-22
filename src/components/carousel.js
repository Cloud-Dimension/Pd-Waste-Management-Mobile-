import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../constants/Constants";

const Carousel = () => {
  const pages = [
    {
      image: require("../../assets/images/wizard1.png"),
      title: "Track your Garbage truck",
      text: "  Know where the garbage truck is and \n       don't miss to dump your trash",
    },
    {
      image: require("../../assets/images/wizard2.png"),
      title: "Click & Upload",
      text: "Click and upload anytime, anywhere \n    and your complaint will be filed",
    },
    {
      image: require("../../assets/images/wizard3.png"),
      title: "3R's for Life",
      text: "Segregate your waste and learn",
    },
  ];

  return (
    <Swiper dotColor={COLORS.GREY} activeDotColor={COLORS.PRIMARY}>
      {pages.map((page, index) => (
        <View key={index} style={styles.sliderImageView}>
          <Image source={page.image} style={{}} />
          <View
            style={{
              marginTop: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.carouselTitle}>{page.title}</Text>
            <Text style={styles.carouselText}>{page.text}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  sliderImageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
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
