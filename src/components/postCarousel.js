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

const PostCard = ({ image, description, onPress }) => {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {description}
          </Text>
          {showLocation ? (
            <View style={styles.locationContainer}>
              <FontAwesome
                name="map-marker"
                size={30}
                color={COLORS.PRIMARY}
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>265 West Avenue</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PostCarousel = ({ posts, onPress }) => (
  <ScrollView horizontal>
    <View style={styles.container}>
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          image={post.image}
          description={post.description}
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
    width: 160,
    height: 200,
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
  descriptionContainer: {
    backgroundColor: COLORS.BACKGROUND_WHITE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60,
  },
  description: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontFamily: "normal",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    color: COLORS.BACKGROUND_WHITE,
  },
});

export default PostCarousel;
