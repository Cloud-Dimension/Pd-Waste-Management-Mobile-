import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Constants";

const PostCard = ({ image, category, onPress, address }) => {
  const [showLocation, setShowLocation] = useState(true);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{category}</Text>
          {showLocation ? (
            <View style={styles.locationContainer}>
              <FontAwesome
                name="map-marker"
                size={30}
                color={COLORS.PRIMARY}
                style={styles.locationIcon}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.locationText}
              >
                {address || "265 West Avenue"}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ComplaintPostCarousel = ({ posts, onPress }) => (
  <ScrollView horizontal>
    <View style={styles.container}>
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          image={post.image}
          category={post.category}
          address={post.address}
          onPress={() => onPress(post)}
        />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  card: {
    width: 200,
    height: 250,
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: COLORS.BACKGROUND_WHITE,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryContainer: {
    backgroundColor: COLORS.BACKGROUND_WHITE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 90,
  },
  category: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontFamily: "bold",
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    color: COLORS.GREY,
  },
});

export default ComplaintPostCarousel;
