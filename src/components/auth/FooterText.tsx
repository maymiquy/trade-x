import React from "react";
import { StyleSheet } from "react-native";
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
  <>
   <StylesGlobalText variant="p" fontFamily={FONTS.Regular} style={styles.text}>
    <UnderlineText text="All Rights Reserved." />
   </StylesGlobalText>
   <StylesGlobalText variant="p" fontFamily={FONTS.Regular} style={styles.text}>
    Developed by <UnderlineText text="maymiquy" />
   </StylesGlobalText>
  </>
 );
};

const styles = StyleSheet.create({
 text: { opacity: 0.6, fontSize: 9 },
 underline: { textDecorationLine: "underline", fontSize: 9 },
});
export default FooterText;
