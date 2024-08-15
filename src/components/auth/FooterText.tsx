import React from "react";
import { StyleSheet, View } from "react-native";
import StylesGlobalText from "../common/StylesGlobalText";
import { FONTS } from "../../utils/constants/Fonts";

interface UnderlineProps {
 text: String;
}
const UnderlineText: React.FC<UnderlineProps> = ({ text }) => {
 return (
  <StylesGlobalText
   variant="p"
   fontFamily={FONTS.Regular}
   style={styles.underline}
  >
   {text}
  </StylesGlobalText>
 );
};

const FooterText = () => {
 return (
  <View style={styles.footer_container}>
   <StylesGlobalText variant="p" fontFamily={FONTS.Regular} style={styles.text}>
    <UnderlineText text="All Rights Reserved." />
   </StylesGlobalText>
   <StylesGlobalText variant="p" fontFamily={FONTS.Regular} style={styles.text}>
    Developed by <UnderlineText text="maymiquy" />
   </StylesGlobalText>
  </View>
 );
};

const styles = StyleSheet.create({
 footer_container: {
  marginTop: 35,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
 },
 text: { opacity: 0.6, fontSize: 9 },
 underline: { textDecorationLine: "underline", fontSize: 9 },
});
export default FooterText;
