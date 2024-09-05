import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import { goBack, navigate } from "../../../utils/navigation-util";

interface BackButtonProps {
 path?: string;
}

const BackButton: React.FC<BackButtonProps> = (props) => {
 const { colors } = useTheme();
 return (
  <TouchableOpacity
   onPress={() => (props.path ? navigate(props.path) : goBack())}
   style={styles.container}
  >
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
