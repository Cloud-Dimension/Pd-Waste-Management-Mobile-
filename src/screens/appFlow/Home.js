import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import HomeTile from "../../components/HomeTile";

const truck = require("../../../assets/images/truck.png");
const Complaints = require("../../../assets/images/complains.png");
const Bins = require("../../../assets/images/dustbin.png");
const Collection = require("../../../assets/images/schedule.png");
const Events = require("../../../assets/images/reminder.png");
const Helpline = require("../../../assets/images/helpline.png");
const Home = () => {
  const tiles = [
    {
      title: "Track Garbage Truck",
      image: truck,
      id: 1,
      page: "map",
    },
    {
      title: "Complaints",
      image: Complaints,
      id: 2,
      page: "complaints",
    },
    {
      title: "Bins around you",
      image: Bins,
      id: 3,
      page: "bins",
    },
    {
      title: "Collection Schedule",
      image: Collection,
      id: 4,
      page: "collection",
    },
    {
      title: "Events & Reminder",
      image: Events,
      id: 5,
      page: "events",
    },
    {
      title: "Helpline",
      image: Helpline,
      id: 6,
      page: "helpline",
    },
  ];

  const renderItem = ({ item }) => (
    <HomeTile title={item?.title} image={item?.image} page={item?.page} />
  );

  return (
    <View style={{ justifyContent: "space-around" }}>
      <FlatList
        data={tiles}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 10,
  },
});

export default Home;
