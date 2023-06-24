import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ContactCard from "../../components/contactCard";
import { COLORS } from "../../constants/Constants";
import PostCarousel from "../../components/postCarousel";
import { posts } from "../../data/testData";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const ExploreYourCity = () => {
  const navigation = useNavigation();
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
    <ScrollView style={styles.container}>
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
      <View style={{ position: "absolute", marginTop: 170 }}>
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
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <ContactCard cardTitle="Know your city" iconName="building" />
      </View>
      <View style={{ marginTop: 15, marginHorizontal: 10 }}>
        <Text style={{ color: COLORS.BLACK, fontSize: 14, fontFamily: "bold" }}>
          Top Articles
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: 15,
        }}
      >
        <PostCarousel
          posts={posts}
          onPress={(item) => navigation.navigate("PostDetails", item)}
        />
      </View>
      <View style={{ marginTop: 15, marginHorizontal: 10 }}>
        <Text style={{ color: COLORS.BLACK, fontSize: 14, fontFamily: "bold" }}>
          Recycling Articles
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: 15,
        }}
      >
        <PostCarousel
          posts={posts}
          onPress={(item) => navigation.navigate("PostDetails", item)}
        />
      </View>
      <View style={{ marginTop: 15, marginHorizontal: 10 }}>
        <Text style={{ color: COLORS.BLACK, fontSize: 14, fontFamily: "bold" }}>
          Job Opportunities
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: 15,
        }}
      >
        <PostCarousel
          posts={posts}
          onPress={(item) => navigation.navigate("PostDetails", item)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
