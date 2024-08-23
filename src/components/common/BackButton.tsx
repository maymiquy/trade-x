import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { goBack } from "../../utils/navigation-util";
import Icon from "react-native-vector-icons/Ionicons";

const BackButton: React.FC = () => {
 const { colors } = useTheme();
 return (
  <TouchableOpacity onPress={() => goBack()} style={styles.container}>
   <Icon name="arrow-back" color={colors.text} size={RFValue(24)} />
  </TouchableOpacity>
 );
};

export default BackButton;

const styles = StyleSheet.create({
 container: {
  width: "auto",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "flex-end",
  paddingVertical: 2,
  paddingHorizontal: 4,
 },
});
