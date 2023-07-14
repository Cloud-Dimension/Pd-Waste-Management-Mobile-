import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {Entypo } from "@expo/vector-icons";

const EventItem = ({description, topic,onClick }) => {
  const shortenText = (text, maxLength) => {
    if (text?.length <= maxLength) {
      return text;
    } else {
      return text?.substring(0, maxLength - 3) + "...";
    }
  };
  return (
    <TouchableOpacity onPress={() => onClick()} style={styles.container}>
      <View style={styles.middleTextContainer}>
      <Image
        source={require('../../assets/images/alert.png')}
        style={styles.imagePlaceholder}
      />
        <View style ={{marginLeft:10}}>
          <Text style={styles.topicText}>{topic}</Text>
          <Text style={styles.descriptionText}>{shortenText(description, 30)}</Text>
        </View>
        
      </View>
      <Entypo name="chevron-thin-right" size={16} color="black" />
    </TouchableOpacity>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: 45,
    height: 45,
    resizeMode:'contain'
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:7,

    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
  },
  arrow: {
    width: 70,
    height: 70,
  },
  middleTextContainer: {
    flexDirection:'row',
    alignItems:'center'
  },
  topicText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#000000",
  },
  descriptionText: {
    fontWeight: "400",
    fontSize: 15,
    color: "grey",

    
  },
  activeBall: {},
  statusText: {},
  statusContainer: {},
});