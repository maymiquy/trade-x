import {
 ScrollView,
 StyleSheet,
 Text,
 TouchableOpacity,
 View,
} from "react-native";
import React from "react";
import StyleSaveAreaView from "../../components/common/StylesSaveAreaView";
import HeaderBrand from "../../components/common/HeaderBrand";
import CustomInput from "../../components/common/inputs/CustomInput";
import OtpTimer from "../../components/auth/OtpTimer";
import CustomButton from "../../components/common/buttons/CustomButton";
import { GlobalStyles } from "../../styles/GlobalStyle";
import CenteredBrand from "../../components/common/CenteredBrand";
import { navigate } from "../../utils/navigation-util";

const EmailOtpScreen = ({ route }: any) => {
 const [loading, setLoading] = React.useState(false);
 const [otp, setOtp] = React.useState("");
 const [otpError, setOtpError] = React.useState("");

 const handleSubmit = async () => {
  switch (true) {
   case !otp:
    setLoading(true);
    setOtpError("Please input OTP number");
    setLoading(false);
    break;
   case otp.length < 6:
    setLoading(true);
    setOtpError("Input min 6 OTP number");
    setLoading(false);
    break;
   case parseInt(otp) === 123456:
    setTimeout(() => {
     setLoading(true);
     navigate("EmailPasswordScreen", {
      email: route.params.email,
     });
    }, 2000);
    setLoading(false);
    break;
   default:
    setLoading(true);
    setOtpError("Wrong OTP number");
    setLoading(false);
    break;
  }
 };

 const resendOTPHandler = async () => {
  // TODO
 };
 return (
  <StyleSaveAreaView>
   <CenteredBrand />
   <ScrollView style={styles.container_input}>
    <TouchableOpacity>
     <View pointerEvents="none">
      <CustomInput label="EMAIL" value={route.params.email} />
     </View>
    </TouchableOpacity>

    <CustomInput
     label="ENTER OTP"
     placeholder="6 digit OTP number"
     value={otp}
     onChangeText={(value) => {
      setOtp(value);
      setOtpError("");
     }}
     onSubmitEditing={() => {
      console.log("HIT OTP API");
     }}
     error={otpError}
     returnKeyType="done"
     maxLength={6}
     keyboardType="number-pad"
     rightText={<OtpTimer type="email" onPress={() => resendOTPHandler()} />}
    />
   </ScrollView>
   <View style={GlobalStyles.bottomBtn}>
    <CustomButton
     text="Verify Email"
     loading={loading}
     disabled={loading}
     onPress={() => handleSubmit()}
    />
   </View>
  </StyleSaveAreaView>
 );
};

export default EmailOtpScreen;

const styles = StyleSheet.create({
 container_input: {
  paddingHorizontal: 8,
  marginTop: 40,
  display: "flex",
  flexDirection: "column",
  gap: 10,
 },
});
