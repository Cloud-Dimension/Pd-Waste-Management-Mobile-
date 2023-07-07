import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Keyboard, KeyboardAvoidingView } from "react-native";
import InputWithBoarders from "../../components/inputWithBoarders";
import { COLORS } from "../../constants/Constants";
import WMButton from "../../components/WMButton";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import AppView from "../../components/AppView";

const ForgotPassoword = () => {
  const navigation = useNavigation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const onSendOtpClicked = () => {
    navigation.navigate("Otp");
  };
  const handleKeyboardDidShow = () => {
    setKeyboardOpen(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardOpen(false);
  };
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow);
    Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide);

    // Clean up the listeners when the component unmounts
    return () => {
      Keyboard.removeListener("keyboardDidShow", handleKeyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", handleKeyboardDidHide);
    };
  }, []);

  return (
    <AppView>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.enterText}>
              Enter <Text style={styles.imbeddedText}>Mobile Number</Text>
            </Text>
            <Text style={styles.detailText}>
              These details are not shared with anyone
            </Text>
            <View style={styles.inputView}>
              <InputWithBoarders
                placeholder="+27xxxxxxxxx"
                borderColor={COLORS.PRIMARY}
              />
            </View>
          </View>
        </ScrollView>
        {keyboardOpen ? null : (
          <View
            style={{
              padding: 20,
              alignSelf: "center",
              position: "absolute",
              bottom: 40,
            }}
          >
            <WMButton title="Send OTP" width={200} onClick={onSendOtpClicked} />
          </View>
        )}
      </KeyboardAvoidingView>
    </AppView>
  );
};

export default ForgotPassoword;

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