import React from "react";
import { View, Text, StyleSheet, Image, Dimensions ,FlatList } from "react-native";
import HomeTile from "../../components/HomeTile";

const truck = require("../../../assets/images/truck.png");
const Complaints = require("../../../assets/images/complains.png");
const Bins = require("../../../assets/images/dustbin.png");
const Collection = require("../../../assets/images/schedule.png");
const Events = require("../../../assets/images/reminder.png");
const Helpline = require("../../../assets/images/helpline.png");

const Recycle = () => {
  const tiles = [
    {
      title: "Recycle",
      image: truck,
      id: 1,
      page: "map",
    },
    {
      title: "RRR Guidelines",
      image: Complaints,
      id: 2,
      page: "complaints",
    },
    {
      title: "How To?",
      image: Bins,
      id: 3,
      page: "bins",
    },
    {
      title: "Make money",
      image: Events,
      id: 5,
      page: "events",
    },
  
  ];

  const renderItem = ({ item }) => (
    <HomeTile title={item?.title} image={item?.image} page={item?.page} />
  );

  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.card}>
      <View>
        <Image
          source={require("../../../assets/images/truckColl.jpg")}
          style={{ width: windowWidth, height: 200 }} 
        />
      </View>

      <View style={{ justifyContent: "space-around" }}>
      <FlatList
        data={tiles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}

      />
    </View>
    </View>
  );
};

export default Recycle;

const styles = StyleSheet.create({
  gridContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
  },
  footer: {
    padding: 10,
    color: "#D3D3D3",
    fontWeight: "500",
  },
});
