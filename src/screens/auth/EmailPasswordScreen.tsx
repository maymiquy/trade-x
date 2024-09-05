import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import StylesSaveAreaView from "../../components/common/StylesSaveAreaView";
import CenteredBrand from "../../components/common/CenteredBrand";
import CustomInput from "../../components/common/inputs/CustomInput";
import CustomButton from "../../components/common/buttons/CustomButton";
import { validatePasswordLength } from "../../utils/validation-util";
import {
 goBack,
 navigate,
 resetAndNavigate,
} from "../../utils/navigation-util";
import { GlobalStyles } from "../../styles/GlobalStyle";
import TouchAbleText from "../../components/auth/TouchAbleText";
import { RFValue } from "react-native-responsive-fontsize";

const EmailPasswordScreen = ({ route }: any) => {
 const [password, setPassword] = useState("");
 const [passwordError, setPasswordError] = useState("");
 const [loading, setLoading] = useState(false);

 const validate = () => {
  if (!validatePasswordLength(password)) {
   setPasswordError("Please enter a valid password");
   return false;
  }
  return true;
 };

 const handleOnSubmit = async () => {
  setLoading(true);

  if (validate()) {
   navigate("PhoneScreen", {
    email: route.params.email,
    password: password,
   });
  }
  setLoading(false);
 };

 return (
  <StylesSaveAreaView>
   <ScrollView>
    <CenteredBrand />

    <TouchableOpacity onPress={() => goBack()}>
     <View pointerEvents="none">
      <CustomInput label="EMAIL" value={route.params.email} />
     </View>
    </TouchableOpacity>

    <CustomInput
     label="PASSWORD"
     returnKeyType="done"
     placeholder="8-20 Characters"
     value={password}
     autoFocus={true}
     error={passwordError}
     onChangeText={(text) => {
      setPassword(text);
      setPasswordError("");
     }}
     onSubmitEditing={handleOnSubmit}
     password
    />
    <TouchAbleText
     onPress={() =>
      navigate("ForgotPassword", {
       email: route.params.email,
      })
     }
     firstText="Forgot Password?"
     style={styles.forgotText}
    />
   </ScrollView>
   <View style={GlobalStyles.bottomBtn}>
    <CustomButton
     text="ENTER"
     loading={loading}
     disabled={loading}
     onPress={() => {
      handleOnSubmit();
     }}
    />
   </View>
  </StylesSaveAreaView>
 );
};

const styles = StyleSheet.create({
 forgotText: {
  fontSize: RFValue(10),
  marginTop: 5,
  alignSelf: "flex-end",
 },
});

export default EmailPasswordScreen;
