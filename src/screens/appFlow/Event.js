import React, { useEffect, useState } from "react";
import { FlatList, View, Text, RefreshControl, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import ComplainItem from "../../components/PrevComplaint";
import EventItem from "../../components/EventItem";



const data = [
  {
  key: "1",
  title: "Community Cleanup Day",
  description: "Join us for a community cleanup day on Oak Avenue this Saturday. Help us beautify our neighborhood by removing trash and debris.",
  status:"Upcoming"
  },
  {
  key: "2",
  title: "Town Hall Meeting: Road Maintenance",
  description: "We invite all residents to attend a town hall meeting to discuss road maintenance issues, including potholes on Main Street. Your input is valuable!",
  status: "Upcoming"
  },
  {
  key: "3",
  title: "Report Streetlight Issues",
  description: "Please report any non-functioning streetlights in our municipality. Your prompt reporting will help us ensure adequate lighting for safety at night.",
  status: "Ongoing"
  },
  {
  key: "4",
  title: "Garbage Collection Delayed",
  description: "Due to unforeseen circumstances, garbage collection on Elm Street will be delayed by one day. We apologize for the inconvenience and appreciate your patience.",
  status: "Ongoing"
  },
  {
  key: "5",
  title: "Residential Parking Regulations",
  description: "Reminder: Parking in the residential area on Maple Lane is restricted to designated parking spots only. Illegally parked vehicles will be towed.",
  status: "Ongoing"
  },
  {
  key: "6",
  title: "Sidewalk Repair Project",
  description: "We are aware of the damaged sidewalk near the park. A repair project is scheduled to start next week for the safety of pedestrians. Please use alternative routes.",
  status: "Upcoming"
  },
  {
  key: "7",
  title: "Sewer System Maintenance",
  description: "Our team is actively working to address the overflowing sewer drain on Oak Street. We apologize for the inconvenience and expect to resolve the issue soon.",
  status: "Ongoing"
  },
  {
  key: "8",
  title: "Playground Renovation",
  description: "Exciting news! The damaged playground equipment in the park will be renovated and upgraded to ensure a safe and enjoyable experience for children. Stay tuned for updates.",
  status: "Upcoming"
  }
  ];

const Events = () => {
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
      <EventItem
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

export default Events;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },
});