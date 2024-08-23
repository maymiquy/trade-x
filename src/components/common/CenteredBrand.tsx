// CenteredBrand
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StylesGlobalText from "./StylesGlobalText";
import { FONTS } from "../../utils/constants/Fonts";
import Icon from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "@react-navigation/native";

const CenteredBrand = () => {
 const { colors } = useTheme();
 return (
  <View style={styles.container}>
   <Icon
    name="stats-chart-outline"
    color={colors.text}
    style={styles.icon}
    size={RFValue(22)}
   />
   <StylesGlobalText
    variant="h4"
    style={{ textAlign: "left" }}
    fontFamily={FONTS.Bold}
   >
    Trade X
   </StylesGlobalText>
  </View>
 );
};

export default CenteredBrand;

const styles = StyleSheet.create({
 container: {
  width: "45%",
  fontWeight: "bold",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignSelf: "center",
  alignItems: "flex-start",
 },
 icon: {
  alignSelf: "center",
  marginRight: 10,
 },
});
