import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import WMButton from "../../components/WMButton";
import { FontAwesome } from "@expo/vector-icons";
import AppView from "../../components/AppView";

const Onboarding = () => {
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  let timeout;
  const pages = [
    {
      image: require("../../../assets/images/wizard1.png"),
      title: "Track your Garbage truck",
      text: "  Know where the garbage truck is and \n       don't miss to dump your trash",
    },
    {
      image: require("../../../assets/images/wizard2.png"),
      title: "Click & Upload",
      text: "Click and upload anytime, anywhere \n    and your complaint will be filed",
    },
    {
      image: require("../../../assets/images/wizard3.png"),
      title: "3R's for Life",
      text: "Segregate your waste and learn",
    },
  ];

  const handleSwiperIndexChanged = (index) => {
    const lastIndex = pages.length - 1;
    if (index === lastIndex) {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 10000);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.state.index;
      const lastIndex = pages.length - 1;
      if (currentIndex === lastIndex) {
          navigation.navigate("Login");
      } else {
        swiperRef.current.scrollBy(1);
      }
    }
  };
  
  
  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <AppView style={styles.container}>
      <Swiper
        ref={swiperRef}
        dotColor={COLORS.GREY}
        activeDotColor={COLORS.PRIMARY}
        onIndexChanged={handleSwiperIndexChanged}
      >
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

      <View style={styles.buttonContainer}>
        <View style={styles.skipButton} >
        <WMButton
                  title="Skip"
                  width={70}
                  color='transparent'
                  onClick={handleSkip}
                  titleStyle={{color:COLORS.GREY}}
                />
        </View>
        <View style={styles.arrowContainer}>
          <View style={styles.nextButton}>
          <WMButton
                  title="Next"
                  width={70}
                  color='transparent'
                  onClick={handleNext}
                  titleStyle={{color:COLORS.GREY}}
                />
          </View>
        </View>
      </View>
    </AppView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginTop: 0,
  },
  carouselText: {
    color: COLORS.GREY,
    fontSize: 15,
    marginTop: 30,
    fontWeight: "700",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  skipButton: {
    padding: 10,
  },
  arrowContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  nextButton: {
    padding: 10,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
});
