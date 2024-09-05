import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const GlobalStyles = StyleSheet.create({
 bottomBtn: {
  position: "absolute",
  bottom: 30,
  width: "100%",
  right: -10,
  left: 10,
 },
 tabIcon: {
  width: RFValue(18),
  height: RFValue(18),
 },
});
