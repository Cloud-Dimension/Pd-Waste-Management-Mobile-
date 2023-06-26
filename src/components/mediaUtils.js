import * as Linking from "expo-linking";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker/src/ImagePicker";
import { Alert } from "react-native";
import { Camera } from "expo-camera";

export default async function getPermissionAsync(permission) {
  const { status } = await Permissions.askAsync(permission);
  if (status !== "granted") {
    const permissionName = permission.toLowerCase().replace("_", " ");
    Alert.alert(
      "Cannot be done 😞",
      `If you would like to use this feature, you'll need to enable the ${permissionName} permission in your phone settings.`,
      [
        {
          text: "Let's go!",
          onPress: () => Linking.openURL("app-settings:"),
        },
        { text: "Nevermind", onPress: () => {}, style: "cancel" },
      ],
      { cancelable: true }
    );

    return false;
  }
  return true;
}

export async function getLocationAsync(onSend) {
  if (await Location.requestForegroundPermissionsAsync()) {
    const location = await Location.getCurrentPositionAsync({});
    if (location) {
      onSend([{ location: location.coords }]);
    }
  }
}

export async function pickImageAsync(onSend) {
  try {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      console.log("1233", !result.canceled);
      if (!result.canceled) {
        const { uri } = result.assets[0];
        return uri;
      }
    }
  } catch (error) {
    console.log("Error occurred in pickImageAsync:", error);
  }
}

export async function takePictureAsync(onSend) {
  await ImagePicker.requestMediaLibraryPermissionsAsync();
  await Camera.requestCameraPermissionsAsync();
  const { status } = await ImagePicker.getCameraPermissionsAsync();
  if (status !== "granted") {
    Permissions = await ImagePicker.requestCameraPermissionsAsync();
    if (Permissions.status !== "granted") {
      alert("You must turn on camera permissions to record a video.");
    }
  }
  try {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      return uri;
    }
  } catch (error) {
    console.log("Error occurred while launching the camera: ", error);
  }
}
