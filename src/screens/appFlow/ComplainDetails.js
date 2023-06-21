import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Select, Box, CheckIcon, Input, Divider } from "native-base";
import WMButton from "../../components/WMButton";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS } from "../../constants/Constants";

const ComplainDetails = () => {
  const [municipality, setMunicipality] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>File your complaint</Text>
          <Box maxW="full" shadow={2} style={{ marginVertical: 10 }}>
            <Select
              shadow={2}
              selectedValue={municipality}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Municipality"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setMunicipality(itemValue)}
            >
              <Select.Item shadow={2} label="UX Research" value="ux" />
              <Select.Item shadow={2} label="Web Development" value="web" />
              <Select.Item
                shadow={2}
                label="Cross Platform Development"
                value="cross"
              />
              <Select.Item shadow={2} label="UI Designing" value="ui" />
              <Select.Item
                shadow={2}
                label="Backend Development"
                value="backend"
              />
            </Select>
          </Box>
          <Box maxW="full" shadow={2} style={{ marginVertical: 10 }}>
            <Select
              shadow={2}
              selectedValue={category}
              minWidth="200"
              accessibilityLabel="Choose Category"
              placeholder="Complaint Category"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Select.Item
                shadow={2}
                label="Garbage vehicle not arrived"
                value="Garbage vehicle not arrived"
              />
              <Select.Item
                shadow={2}
                label="Dustbin not cleaned"
                value="Dustbin not cleaned"
              />
              <Select.Item
                shadow={2}
                label="Garbage burning"
                value="Garbage burning"
              />
              <Select.Item
                shadow={2}
                label="Garbage dumb"
                value="Garbage dumb"
              />
              <Select.Item shadow={2} label="Dead animal" value="Dead animal" />
              <Select.Item
                shadow={2}
                label="Sweeping not done"
                value="Sweeping not done"
              />
              <Select.Item
                shadow={2}
                label="Open defecation"
                value="Open defecation"
              />
            </Select>
          </Box>
          <Text>Add Description</Text>
          <Box alignItems="center" style={{ marginVertical: 10 }}>
            <Input
              spellCheck
              multiline
              height={100}
              mx="3"
              value={description}
              onChangeText={setDescription}
              placeholder="enter description"
              w="100%"
            />
          </Box>
          <Divider style={{ marginVertical: 20 }} />
          {!image ? (
            <TouchableWithoutFeedback
              onPress={() => {}}
              style={{ alignItems: "center" }}
            >
              <Entypo name="camera" size={80} color={COLORS.SECONDARY} />
              <Text style={{ color: "grey" }}>Upload picture</Text>
            </TouchableWithoutFeedback>
          ) : (
            <View style={{ alignSelf: "center", marginTop: 10 }}>
              <MaterialIcons
                onPress={() => {
                  setImage(null);
                }}
                name="cancel"
                size={24}
                color="red"
                style={{
                  position: "absolute",
                  top: -12,
                  zIndex: 10,
                  right: -12,
                }}
              />
              <Image
                style={{ width: 150, height: 150, borderRadius: 10 }}
                source={{
                  uri: "https://www.groundup.org.za/media/uploads/images/photographers/Vincent%20Lali/Buyiswa%20Dyani.jpeg",
                }}
              />
            </View>
          )}
          <View style={{ alignItems: "center", marginTop: 70 }}>
            <WMButton title="Done" width={200} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ComplainDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontWeight: "500",
    fontSize: 16,
    marginVertical: 10,
  },
});
