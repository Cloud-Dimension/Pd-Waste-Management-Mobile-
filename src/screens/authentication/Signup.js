import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
//import { SafeAreaView, Keyboard, KeyboardAvoidingView } from "react-native";
import InputWithBoarders from "../../components/inputWithBoarders";
import { COLORS } from "../../constants/Constants";
import WMButton from "../../components/WMButton";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import AppView from "../../components/AppView";

const Signup = () => {
  const navigation = useNavigation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const onSignUpClicked = async () => {
    navigation.navigate("Signup");
  };

  useEffect(() => {
  }, []);

  return (
    <AppView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.enterText}>
              Sign <Text style={styles.imbeddedText}>UP</Text>
            </Text>
            <View style={styles.inputView}>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Full Name"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Surname"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Mobile Number"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="E-mail"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Municipality"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Address"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Role"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Password"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={styles.inputView}>
                <InputWithBoarders
                  placeholder="Confirm Password"
                  borderColor={COLORS.PRIMARY}
                />
              </View>

              <View
            style={{
              alignSelf: "center",
            }}
          >
            <WMButton title="Sign Up" width={200} onClick={onSignUpClicked} />
          </View>
            </View>
          </View>
        </ScrollView>
    </AppView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  LoginText: {
    fontWeight: "500",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 100,
  },
  enterText: {
    fontWeight: "500",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 50,
  },
  imbeddedText: {
    color: COLORS.PRIMARY,
  },
  detailText: {
    color: COLORS.GREY,
    alignSelf: "center",
  },
  inputView: {
    marginVertical: 30,
    marginTop:10,
    marginBottom:10
  },
  orText: {
    color: COLORS.PRIMARY,
    alignSelf: "center",
    marginBottom: 10,
  },
  shadowView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  imageIcon: {},
});
