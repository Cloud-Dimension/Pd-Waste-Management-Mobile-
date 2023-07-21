import jwtDecode from "jwt-decode";
import { saveDataToCache } from "../localStorageManager/Cache";
import { handleFailure, handleSuccess } from "../util/HandleResponse";
import HandleHttpCall from "./Api";

/**
 *  User authentication. It takes only username & password,then it will decode token and save current logged in user
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
export const authenticateUser = async (email, password) => {
    try {
      const results = await HandleHttpCall("api/TokenAuth/Authenticate", "POST", {
        userNameOrEmailAddress: email,
        password: password,
        rememberClient: true,
      });
  
      if (results?.success) {
        handleSuccess(results);
        await saveDataToCache("token", results?.result?.accessToken);
        const decoded = jwtDecode(results?.result?.accessToken);
        console.log("returned",decoded)
        return decoded;
      }
    } catch (error) {
      return null;
    }
  }