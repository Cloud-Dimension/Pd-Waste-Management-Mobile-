import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import React from "react";

const PostComplaintDetails = (props) => {
  const params = props.route.params;
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ padding: 10 }}>
      <Image
        source={{ uri: params.image }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
      <View style={styles.container}>
        <Text>{params.description}</Text>
      </View>
    </View>
  );
};

export default PostComplaintDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 6,
  },
});
