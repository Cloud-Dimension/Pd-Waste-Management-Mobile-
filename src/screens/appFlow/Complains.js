import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ComplaintCard from "../../components/complaintCard";
import { COLORS } from "../../constants/Constants";

const Complains = () => {
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
        
      </View>
    </View>
  );
};

export default Complains;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND_WHITE,
  },
  complaint: { marginTop: 30, marginBottom: 30 },
});
