import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import StylesSaveAreaView from "../../components/common/StylesSaveAreaView";
import StylesGlobalText from "../../components/common/StylesGlobalText";
import { FONTS } from "../../utils/constants/Fonts";
import {
 normalizeModerately,
 screenWidth,
 screenHeight,
} from "../../utils/scaling-util";
import LoginImageDark from "../../assets/images/login_dark_animation.png";
import LoginImageLight from "../../assets/images/login_animation_light.png";
import GoogleIcon from "../../assets/images/google.png";
import OauthLoginButton from "../../components/auth/OauthLoginButton";
import { useScheme, useTheme } from "../../theme/useTheme";
import TouchAbleText from "../../components/auth/TouchAbleText";
import FooterText from "../../components/auth/FooterText";
import { signInWithGoogle } from "../../services/oauth.service";
import { navigate } from "../../utils/navigation-util";

const LoginScreen = () => {
 const { colors } = useTheme();
 const theme = useScheme();
 return (
  <StylesSaveAreaView>
   <View style={styles.container}>
    <StylesGlobalText variant="h1" fontFamily={FONTS.Bold}>
     Welcome to TradeX
    </StylesGlobalText>
    <StylesGlobalText
     style={styles.sub_text}
     variant="h8"
     fontFamily={FONTS.Regular}
    >
     The World in Your Hand !
    </StylesGlobalText>
    <View style={styles.img_container}>
     <Image
      style={styles.img}
      source={theme === "dark" ? LoginImageDark : LoginImageLight}
     />
    </View>
    <OauthLoginButton
     onPress={async () => await signInWithGoogle()}
     icon={<Image source={GoogleIcon} style={styles.img_google} />}
     text="Continue with Google"
    />
    <Text style={{ marginTop: 10, fontSize: 12, color: colors.text }}>or</Text>
    <TouchAbleText
     firstText="Continue with other's email"
     onPress={() => navigate("Email Login")}
     style={styles.touchText}
    />
    <FooterText />
   </View>
  </StylesSaveAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 20,
  paddingHorizontal: 20,
 },
 sub_text: {
  marginTop: 14,
  opacity: 0.6,
 },
 img_container: {
  width: screenWidth * 1,
  height: screenHeight * 0.45,
  marginVertical: normalizeModerately(25),
 },
 img: {
  width: "100%",
  height: "100%",
  resizeMode: "contain",
 },
 img_google: {
  width: normalizeModerately(20),
  height: normalizeModerately(20),
 },
 touchText: {
  marginVertical: 30,
  marginTop: 15,
 },
});

export default LoginScreen;
