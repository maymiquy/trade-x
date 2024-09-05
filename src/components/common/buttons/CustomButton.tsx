import { Animated, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { useEffect, useState } from "react";
import { useScheme, useTheme } from "../../../theme/useTheme";
import TouchableRipple from "react-native-material-ripple";
import StylesGlobalText from "../StylesGlobalText";
import { FONTS } from "../../../utils/constants/Fonts";
import { Colors } from "../../../utils/constants/Colors";

interface CustomButtonProps {
 text: string;
 loading?: boolean;
 disabled?: boolean;
 onPress: () => void;
 style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
 text,
 loading,
 disabled,
 onPress,
 style,
}) => {
 const { colors } = useTheme();
 const theme = useScheme();
 const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

 useEffect(() => {
  if (loading) {
   animatedValue.setValue(0);
   Animated.loop(
    Animated.timing(animatedValue, {
     toValue: 1,
     duration: 1800,
     useNativeDriver: true,
    }),
   ).start();
  } else {
   animatedValue.stopAnimation();
  }
 }, [loading]);

 const translateX = animatedValue.interpolate({
  inputRange: [0, 1],
  outputRange: [-500, 500],
 });

 return (
  <TouchableRipple
   disabled={disabled}
   onPress={onPress}
   rippleColor="#fff"
   style={[
    styles.button,
    {
     backgroundColor:
      loading || disabled
       ? theme == "dark"
         ? colors.card
         : "#DFDFDF"
       : Colors.profit,
    },
    style,
   ]}
  >
   <StylesGlobalText
    fontFamily={FONTS.Bold}
    variant="h6"
    style={{ color: "white" }}
   >
    {text}
   </StylesGlobalText>
   {loading && (
    <Animated.View
     style={[
      styles.loadingIndicator,
      {
       transform: [{ translateX }],
      },
     ]}
    />
   )}
  </TouchableRipple>
 );
};

export default CustomButton;

const styles = StyleSheet.create({
 button: {
  padding: 14,
  width: "100%",
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
 },
 loadingIndicator: {
  position: "absolute",
  bottom: 0,
  left: 0,
  height: 2,
  backgroundColor: Colors.profit,
  width: "100%",
 },
});
