import Toast from "react-native-toast-message";

export const handleSuccess = async (results) => {
    console.log("error", results);
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Welcome to Waste Management App. Enjoy 🎉",
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2500
    });
  };
  
  export const handleFailure = (errorMessage) => {
    console.log("error", errorMessage);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: errorMessage,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2500
    });
  };