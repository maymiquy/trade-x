import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { FONTS } from "../../utils/constants/Fonts";
import { useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

interface StylesGlobalTextProps {
 variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8" | "h9" | "p";
 fontFamily?: FONTS;
 fontSize?: number;
 style?: TextStyle;
 numberOfLines?: number;
 children: React.ReactNode;
 onLayout?: (event: object) => void;
}

const StylesGlobalText: React.FC<StylesGlobalTextProps> = ({
 variant = "p",
 fontFamily,
 fontSize,
 style,
 onLayout,
 children,
 numberOfLines,
}) => {
 const { colors } = useTheme();
 let calcFontSize: number;
 switch (variant) {
  case "h1":
   calcFontSize = RFValue(fontSize || 26);
   break;
  case "h2":
   calcFontSize = RFValue(fontSize || 24);
   break;
  case "h3":
   calcFontSize = RFValue(fontSize || 22);
   break;
  case "h4":
   calcFontSize = RFValue(fontSize || 20);
   break;
  case "h5":
   calcFontSize = RFValue(fontSize || 18);
   break;
  case "h6":
   calcFontSize = RFValue(fontSize || 16);
   break;
  case "h7":
   calcFontSize = RFValue(fontSize || 14);
   break;
  case "h8":
   calcFontSize = RFValue(fontSize || 12);
   break;
  default:
   calcFontSize = RFValue(fontSize || 10);
   break;
 }

 const fontFamilyStyle = {
  fontFamily:
   fontFamily === FONTS.Black
    ? "Roboto-Black"
    : fontFamily === FONTS.Bold
    ? "Roboto-Bold"
    : fontFamily === FONTS.Light
    ? "Roboto-Light"
    : fontFamily === FONTS.Medium
    ? "Roboto-Medium"
    : fontFamily === FONTS.Number
    ? "Manrope-Regular"
    : fontFamily === FONTS.NumberSemiBold
    ? "Manrope-SemiBold"
    : fontFamily === FONTS.Lato
    ? "Lato-Regular"
    : fontFamily === FONTS.Thin
    ? "Roboto-Thin"
    : "Roboto-Regular",
 };
 return (
  <>
   <Text
    onLayout={onLayout}
    numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
    style={[
     styles.text,
     { color: colors.text, fontSize: calcFontSize },
     fontFamilyStyle,
     style,
    ]}
   >
    {children}
   </Text>
  </>
 );
};

export default StylesGlobalText;

const styles = StyleSheet.create({
 text: {
  textAlign: "left",
 },
});
