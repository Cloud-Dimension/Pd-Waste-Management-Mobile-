import React, { useEffect, useState } from "react";
import { FlatList, View, Text, RefreshControl, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import ComplainItem from "../../components/PrevComplaint";



const data = [
  {
    key: "1",
    title: "Abandoned vehicle on the street",
    description: "An abandoned vehicle has been parked on the side of Oak Avenue for over a week, taking up valuable parking space and becoming an eyesore.",
    status:"Open"
    
  },
  {
    key: "2",
    title: "Potholes on Main Street",
    description: "There are multiple potholes along Main Street, causing inconvenience and potential damage to vehicles.",
    status: "Resolved"
    },
    
    {
    key: "3",
    title: "Streetlight not working",
    description: "One of the streetlights near the intersection of Elm Avenue and Oak Street is not functioning, resulting in insufficient lighting at night.",
    status: "Open"
    },
    
    {
    key: "4",
    title: "Garbage not collected on schedule",
    description: "The garbage collection trucks have not picked up the trash on Elm Street for the past two days, leading to overflowing bins and unsanitary conditions.",
    status: "Open"
    },
    
    {
    key: "5",
    title: "Illegal parking in residential area",
    description: "Vehicles are consistently parked illegally in the residential area on Maple Lane, blocking driveways and causing traffic congestion.",
    status: "Open"
    },
    
    {
    key: "6",
    title: "Broken sidewalk near the park",
    description: "There is a section of the sidewalk near the local park that is severely damaged, posing a potential tripping hazard to pedestrians.",
    status: "Open"
    }
    ,
    {
    key: "7",
    title: "Overflowing sewer drain",
    description: "The sewer drain on Oak Street is overflowing, emitting a foul odor and creating an unsanitary environment.",
    status: "Open"
    }
    ,
    {
    key: "8",
    title: "Damaged playground equipment",
    description: "Several pieces of playground equipment in the park have broken parts, making them unsafe for children to use.",
    status: "Resolved"
    }
];

const PrevComplains = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
 // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onItemClicked = (description) => {
    navigation.navigate("reportedComplaint", { description: description });
  };

  const getComplaints = async () => {
   
  };
  useEffect(() => {
    //getComplaints();
  }, []);
  const renderItem = ({ item }) => (
    <View>
      <ComplainItem
        topic={item?.title}
        description={item?.status}
        onClick={() => onItemClicked(item?.description)}
      />
    </View>
  );

  const EmptyListComponent = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "gray" }}>
        You don't have any previous complains😁
      </Text>
    </View>
  );
  const handleRefresh = async () => {
    setRefreshing(true);
    await getNotifications();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={EmptyListComponent}
      />
      {/* {isLoading && <Loader/>} */}
    </View>
  );
};

export default PrevComplains;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },
});