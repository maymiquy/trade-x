import React from "react";
import { Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "../../utils/constants/Fonts";

const TouchAbleText: React.FC<{
 firstText: string;
 style?: TextStyle;
 onPress?: () => void;
}> = ({ firstText, style, onPress }) => {
 const { colors } = useTheme();
 return (
  <TouchableOpacity onPress={onPress}>
   <Text
    style={[
     styles.bottomText,
     { color: colors.primary, textDecorationStyle: "solid", fontSize: 16 },
     style,
    ]}
   >
    {firstText}
   </Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 bottomText: {
  fontFamily: FONTS.Medium,
  fontSize: RFPercentage(1.5),
 },
});

export default TouchAbleText;
