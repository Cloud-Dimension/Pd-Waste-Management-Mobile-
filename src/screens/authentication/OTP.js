import React, { useState, useRef } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AppView from "../../components/AppView";

const OtpInput = () => {
  const navigation = useNavigation();
  const { isLoggedIn, updateLoginStatus } = useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    setOtp((prevOtp) => {
      const updatedOtp = prevOtp.split("");
      updatedOtp[index] = text;
      return updatedOtp.join("");
    });

    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <AppView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.infoText}>
            A 6 digit OTP has been sent to your registered mobile number
          </Text>
          <Text style={styles.enterText}>
            Enter <Text style={styles.embeddedText}>OTP</Text>
          </Text>

          <View style={styles.inputContainer}>
            {Array.from({ length: 6 }).map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpBox}
                value={otp[index] || ""}
                onChangeText={(text) => handleOtpChange(text, index)}
                maxLength={1}
                keyboardType="numeric"
                autoFocus={index === 0}
                ref={(ref) => (inputRefs.current[index] = ref)}
                onSubmitEditing={() => {
                  if (index === 5 && otp.length === 6) {
                    updateLoginStatus(true);
                  }
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </AppView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  infoText: {
    alignSelf: "center",
    marginTop: 200,
    textAlign: "center",
    color: COLORS.GREY,
    width: "70%",
  },
  enterText: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 15,
    marginVertical: 20,
  },
  embeddedText: {
    color: COLORS.PRIMARY,
  },
  container: {
    padding: 20,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 5,
    width: 40,
    height: 40,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 16,
  },
});

export default OtpInput;
