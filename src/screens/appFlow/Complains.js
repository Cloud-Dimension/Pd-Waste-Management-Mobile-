import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ComplaintCard from "../../components/complaintCard";
import { COLORS } from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { posts } from "../../data/testData";
import ComplaintPostCarousel from "../../components/complaintPostCarousel";
import ContactCard from "../../components/contactCard";

const Complains = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.complaint}>
            <ComplaintCard
              complainType={"File a Complaint"}
              complaintCount={""}
              complainTypeIconName={""}
              page="fileComplain"
            />
          </View>
          <View style={styles.complaint}>
            <ComplaintCard
              complainType={"Previous Complaints"}
              complaintCount={"2"}
              complainTypeIconName={""}
              page="prevComplaints"
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: 40,
            marginBottom: 15,
          }}
        >
          <Text style={{ marginRight: 10 }}>Latest complaints around you</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: 15,
          }}
        >
          <ComplaintPostCarousel
            posts={posts}
            onPress={(item) =>
              navigation.navigate("PostComplaintDetails", item)
            }
            cardStyle={{
              width: 40,
              height: 200,
              marginRight: 10,
              borderRadius: 8,
              overflow: "hidden",
              backgroundColor: COLORS.BACKGROUND_WHITE,
            }}
            descriptionContainer={{
              backgroundColor: COLORS.BACKGROUND_WHITE,
              paddingHorizontal: 15,
              paddingVertical: 10,
              height: 10,
            }}
            showIconLocation={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Complains;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_WHITE,
  },
  complaint: { marginTop: 30, marginBottom: 30 },
});
