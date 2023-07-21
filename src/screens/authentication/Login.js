import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Keyboard, KeyboardAvoidingView } from "react-native";
import InputWithBoarders from "../../components/inputWithBoarders";
import { COLORS } from "../../constants/Constants";
import WMButton from "../../components/WMButton";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Toast from "react-native-toast-message";
import { Divider } from "@rneui/base";
import AppView from "../../components/AppView";
import { authenticateUser } from "../../network/NetworkCalls";
import Loader from "../../components/Loader";

const Login = () => {
  const navigation = useNavigation();
  const { currentUser, updateCurrentUser } = useContext(AuthContext);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSignInClicked = async () => {
    setIsLoading(true);
    const decodedUser = await authenticateUser("adminr", "123qwe"); //to be hooked to the form
    if (decodedUser) {
      updateCurrentUser({
        user: {
          id: decodedUser[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
          ],
          name: decodedUser[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ],
          surname: "",
          role: decodedUser[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ],
          emailAddress:
            decodedUser[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
            ],
        },
        isLoggedIn: true,
      });
    }
    setIsLoading(false);
  };

  const handleKeyboardDidShow = () => {
    setKeyboardOpen(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardOpen(false);
  };
  useEffect(() => {
    Keyboard?.addListener("keyboardDidShow", handleKeyboardDidShow);
    Keyboard?.addListener("keyboardDidHide", handleKeyboardDidHide);
    return () => {
      Keyboard?.removeListener("keyboardDidShow", handleKeyboardDidShow);
      Keyboard?.removeListener("keyboardDidHide", handleKeyboardDidHide);
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
            <View style={styles.contentView}>
              <View>
                <InputWithBoarders
                  placeholder="UserName"
                  borderColor={COLORS.PRIMARY}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <InputWithBoarders
                  placeholder="Password"
                  borderColor={COLORS.PRIMARY}
                />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <WMButton
                  title="Log In"
                  width={200}
                  onClick={onSignInClicked}
                />
              </View>
              <TouchableOpacity
                style={styles.forgotPasswordLink}
                onPress={() => navigation.navigate("ForgotPassoword")}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Divider style={{ width: 180 }} />
                <Text style={styles.orText}> or </Text>
                <Divider style={{ width: 180 }} />
              </View>

              <View style={styles.shadowView}>
                <Entypo name="google--with-circle" size={20} color="black" />
                <Text style={{ marginHorizontal: 18 }}>
                  Sign in with Google
                </Text>
              </View>
              <View style={styles.shadowView}>
                <Entypo name="facebook-with-circle" size={20} color="blue" />
                <Text style={{ marginHorizontal: 10 }}>
                  Sign in with Facebook
                </Text>
              </View>
            </View>
          </View>
        
          {isLoading && <Loader />}
        </ScrollView>
        {keyboardOpen ? null : (
          <View
            style={{
              padding: 20,
              alignSelf: "center",
              position: "absolute",
              bottom: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ color: COLORS.GREY }}>Don't have an account? </Text>
            <TouchableOpacity
              style={styles.forgotPasswordLink}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.forgotPasswordText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
          <Toast />
      </KeyboardAvoidingView>
    </AppView>
  );
};

export default Login;

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
  forgotPasswordText: {
    color: "blue",
  },
  imbeddedText: {
    color: COLORS.PRIMARY,
  },
  detailText: {
    color: COLORS.GREY,
    alignSelf: "center",
  },
  contentView: {
    marginVertical: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  orText: {
    color: COLORS.PRIMARY,
    alignSelf: "center",
    marginTop: 3,
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
  forgotPasswordLink: {
    justifyContent: "center",
    alignItems: "center",
  },
});
