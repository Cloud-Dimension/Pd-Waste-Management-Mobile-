import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ContactCard from "../../components/contactCard";
import { COLORS } from "../../constants/Constants";

const { width } = Dimensions.get("window");

const ExploreYourCity = () => {
  const [allowCarousel, setAllowCarousel] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselData = [
    { id: 1, image: require("../../../assets/images/rrrImage.jpg") },
    { id: 2, image: require("../../../assets/images/truckColl.jpg") },
    { id: 3, image: require("../../../assets/images/communityI.png") },
  ];

  const renderCarouselItem = ({ item }) => (
    <Image source={item.image} style={styles.carouselImage} />
  );

  return (
    <View style={styles.container}>
      {allowCarousel ? (
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={width}
          itemWidth={width}
          loop
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      ) : (
        <View>
          <Image
            source={require("../../../assets/images/truckColl.jpg")}
            style={styles.carouselImage}
          />
        </View>
      )}
      <View style={{position: "absolute",marginTop:170}}> 
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      </View>
      <View style={{ justifyContent: "center", alignContent: "center", marginTop: 10 }}>
        <ContactCard cardTitle="Know your city" iconName="building" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  carouselImage: {
    width,
    height: 200,
    resizeMode: "cover",
  },
  paginationContainer: {
    paddingVertical: 8,
    paddingHorizontal: 130,
    backgroundColor: "transparent",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: COLORS.BACKGROUND_WHITE,
  },
  paginationInactiveDot: {
    backgroundColor: COLORS.GREY,
  },
});

export default ExploreYourCity;
