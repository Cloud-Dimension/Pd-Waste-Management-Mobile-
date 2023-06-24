import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import React from "react";

const PostDetails = (props) => {
  const params = props.route.params;
  const windowWidth = Dimensions.get("window").width;
  return (
    <View>
      <Image
        source={params.image}
        style={{ width: windowWidth, height: 200 }}
      />
      <Text>{params.description}</Text>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
