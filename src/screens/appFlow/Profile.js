import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Keyboard, KeyboardAvoidingView } from "react-native";
import InputWithBoarders from "../../components/inputWithBoarders";
import { COLORS } from "../../constants/Constants";
import WMButton from "../../components/WMButton";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppView from "../../components/AppView";

const Profile = () => {
  const navigation = useNavigation();
  const { currentUser, updateCurrentUser } = useContext(AuthContext);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [loading, setLoading] = useState(false);

  const onEditProfileClicked = () => {
    setEditProfile(true);
  };

  const onSaveProfileClicked = () => {
    setEditProfile(false);
  };

  const handleSignOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      updateCurrentUser({
        user: null,
        isLoggedIn: false,
      });
    }, 1000);
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
            <View style={{ marginBottom: 20 }}>
              {editProfile ? (
                <WMButton
                  title="Save"
                  width={200}
                  onClick={onSaveProfileClicked}
                />
              ) : (
                <WMButton
                  title="Edit Profile"
                  width={200}
                  onClick={onEditProfileClicked}
                />
              )}
            </View>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleSignOut}
            >
              <WMButton title="Sign Out" width={200} disabled={loading} />
              <View style={{ position: "absolute", bottom: 0 }}>
                <FontAwesome
                  name="sign-out"
                  size={24}
                  color={COLORS.BACKGROUND_WHITE}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
          </View>
        )}
      </KeyboardAvoidingView>
    </AppView>
  );
};

export default Profile;

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
    marginTop: 10,
    marginBottom: 10,
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
  icon: {
    marginRight: 100,
    marginBottom: 10,
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
