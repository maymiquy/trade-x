import React, { useState } from "react";
import StylesSaveAreaView from "../../components/common/StylesSaveAreaView";
import StylesGlobalText from "../../components/common/StylesGlobalText";
import { FONTS } from "../../utils/constants/Fonts";
import {
 KeyboardAvoidingView,
 StyleSheet,
 TextInput,
 TouchableOpacity,
 View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "@react-navigation/native";
import CustomButton from "../../components/common/buttons/CustomButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors as colorw } from "../../utils/constants/Colors";
import OtpTimer from "../../components/auth/OtpTimer";
import { useScheme } from "../../theme/useTheme";
import { navigate } from "../../utils/navigation-util";

const PhoneScreen = () => {
 const { colors } = useTheme();
 const theme = useScheme();
 const [phoneNumber, setPhoneNumber] = useState("");
 const [loading, setLoading] = useState(false);
 const [otpSent, setOtpSent] = useState(false);
 const [otp, setOtp] = useState("");
 const [otpError, setOtpError] = useState("");
 const handleSendOTP = async () => {
  setLoading(true);
  setOtpSent(true);
  //TODO
  setLoading(false);
 };

 const handleVerifyOTP = async () => {
  if (!otp) {
   setOtpError("Enter OTP");
   return;
  }
  setLoading(true);
  //TODO
  setLoading(false);
 };

 const handlePress = async () => {
  if (otpSent) {
   handleVerifyOTP();
   return;
  }
  handleSendOTP();
 };
 return (
  <KeyboardAvoidingView
   keyboardVerticalOffset={10}
   behavior="padding"
   style={styles.keyboardContainer}
  >
   <StylesSaveAreaView>
    <StylesGlobalText
     variant="h4"
     fontFamily={FONTS.Medium}
     style={styles.mainContainer}
    >
     {otpSent ? "Verify your mobile number" : "Enter mobile number"}
    </StylesGlobalText>

    {otpSent ? (
     <View style={styles.numberContainer}>
      <StylesGlobalText variant="h8">
       Enter the OTP sent to +91 {phoneNumber}
      </StylesGlobalText>
      <Icon
       color={colorw.profit}
       name="pencil"
       size={RFValue(12)}
       onPress={() => setOtpSent(false)}
      />
     </View>
    ) : (
     <StylesGlobalText variant="h8">
      Mobile number is required to invest in India
     </StylesGlobalText>
    )}

    {!otpSent ? (
     <View style={styles.phoneContainer}>
      <StylesGlobalText
       variant="h5"
       fontFamily={FONTS.NumberSemiBold}
       style={{ fontWeight: "bold" }}
      >
       +62
      </StylesGlobalText>
      <TextInput
       focusable={true}
       autoFocus={true}
       keyboardType="phone-pad"
       placeholder="8123456789"
       maxLength={10}
       style={[
        {
         borderColor: colors.text,
         color: colors.text,
        },
        styles.textInput,
       ]}
       value={phoneNumber}
       onChangeText={(text) => {
        setPhoneNumber(text);
        setOtpError("");
       }}
      />
     </View>
    ) : (
     <>
      <View style={styles.phoneContainer}>
       <TextInput
        focusable={true}
        autoFocus={true}
        keyboardType="phone-pad"
        placeholder="OTP"
        maxLength={6}
        style={[{ color: colors.text }, styles.textInput]}
        value={otp}
        onChangeText={(text) => setOtp(text)}
       />
      </View>
      <View style={styles.otpTimerContainer}>
       <TouchableOpacity
        style={{
         backgroundColor: theme == "dark" ? colors.card : "#ccc",
         padding: 8,
         borderRadius: 5,
        }}
       >
        <OtpTimer
         style={{
          fontSize: RFValue(10),
          color: colors.text,
          opacity: 0.8,
          fontFamily: FONTS.Regular,
         }}
         type="OTP"
         onPress={() => handleSendOTP()}
        />
       </TouchableOpacity>
       <TouchableOpacity
        style={{
         backgroundColor: theme == "dark" ? colors.card : "#ccc",
         padding: 8,
         borderRadius: 5,
        }}
       >
        <StylesGlobalText
         style={{
          fontSize: RFValue(10),
          color: colors.text,
          opacity: 0.8,
          fontFamily: FONTS.Regular,
         }}
        >
         Get OTP via call
        </StylesGlobalText>
       </TouchableOpacity>
       <TouchableOpacity></TouchableOpacity>
      </View>
     </>
    )}

    <View style={styles.btnContainer}>
     {otpError && (
      <View style={styles.errorContainer}>
       <StylesGlobalText variant="h7" fontFamily={FONTS.Medium}>
        Wrong OTP, 2 attempts remaining
       </StylesGlobalText>
      </View>
     )}
     <CustomButton
      text={otpSent ? "VERIFY" : "SEND OTP"}
      onPress={handlePress}
      loading={loading}
      disabled={loading}
     />
    </View>
   </StylesSaveAreaView>
  </KeyboardAvoidingView>
 );
};

const styles = StyleSheet.create({
 errorContainer: {
  backgroundColor: "rgba(255, 0, 0, 0.2)",
  padding: 10,
  justifyContent: "center",
  borderRadius: 4,
  alignItems: "center",
  marginVertical: 20,
 },
 btnContainer: {
  justifyContent: "flex-end",
  flex: 1,
 },
 textInput: {
  width: "90%",
  fontWeight: "bold",
  fontSize: RFValue(15),
  borderLeftWidth: 1,
  paddingLeft: 20,
 },
 phoneContainer: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  marginTop: 30,
  paddingLeft: 3,
 },
 keyboardContainer: {
  flex: 1,
 },
 mainContainer: {
  marginVertical: 10,
 },
 numberContainer: {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
 },
 otpTimerContainer: {
  flexDirection: "row",
  alignItems: "center",
  gap: 30,
  marginTop: 50,
 },
});

export default PhoneScreen;
