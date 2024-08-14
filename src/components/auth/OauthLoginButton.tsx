import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import StylesGlobalText from "../common/StylesGlobalText";
import { Colors } from "../../utils/constants/Colors";
import { FONTS } from "../../utils/constants/Fonts";

interface OauthLoginButtonProps {
 icon: React.ReactNode;
 text: string;
 onPress: () => void;
}

const OauthLoginButton: React.FC<OauthLoginButtonProps> = ({
 icon,
 text,
 onPress,
}) => {
 return (
  <TouchableOpacity
   activeOpacity={0.8}
   style={styles.container}
   onPress={onPress}
  >
   {icon}
   <StylesGlobalText variant="h7" fontFamily={FONTS.Bold} style={styles.text}>
    {text}
   </StylesGlobalText>
  </TouchableOpacity>
 );
};

export default OauthLoginButton;

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  width: "100%",
  paddingVertical: 10,
  marginVertical: 10,
  backgroundColor: Colors.light_background,
  borderWidth: 1,
  borderColor: "#DFDFDF",
 },
 text: {
  marginLeft: 10,
  color: "#000000",
 },
});
