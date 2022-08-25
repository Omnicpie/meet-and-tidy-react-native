import { Platform } from "react-native";

//API ROOT URL
export const ROOT_URL = `http://${
  Platform.OS === "ios" ? "localhost" : "10.0.2.2"
}:3000`;
