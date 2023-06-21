import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/searchBar";
import ContactCard from "../../../src/components/contactCard";

const Helpline = () => {
  const navigation = useNavigation();

  const contacts = [
    {
      name: "John",
      surname: "Doe",
      email: "johndoe@example.com",
      position: "Manager",
      officeContact: "123-456-7890",
      alternativeNumber: "987-654-3210",
    },
    {
      name: "Jane",
      surname: "Smith",
      email: "janesmith@example.com",
      position: "Supervisor",
      officeContact: "234-567-8901",
      alternativeNumber: "876-543-2109",
    },
    {
      name: "Jane",
      surname: "Smith",
      email: "janesmith@example.com",
      position: "Supervisor",
      officeContact: "234-567-8901",
      alternativeNumber: "876-543-2109",
    },
  ];

  const handleContactPress = (item) => {
    return () => {
      navigation.navigate("HelplineDetailsPage", { item });
    };
  };
  

  return (
    <View style={{ flex: 1, marginTop: 20, backgroundColor: "white" }}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleContactPress(item)}>
            <ContactCard data={item} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => <Text>Empty List</Text>}
      />
    </View>
  );
};

export default Helpline;

const styles = StyleSheet.create({
  searchBarContainer: {
    marginBottom: 0,
    width: 370,
    marginLeft: 5,
  },
});
