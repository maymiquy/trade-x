import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import StyleSaveAreaView from "../../components/common/StylesSaveAreaView";
import HeaderBrand from "../../components/common/HeaderBrand";
import CustomInput from "../../components/common/inputs/CustomInput";
import CustomButton from "../../components/common/buttons/CustomButton";
import { navigate } from "../../utils/navigation-util";
import { validateEmail } from "../../utils/validation-util";
import { GlobalStyles } from "../../styles/GlobalStyle";

export default function EmailLoginScreen() {
 const [loading, setLoading] = React.useState(false);
 const [email, setEmail] = React.useState("");
 const [invalidEmail, setInvalidEmail] = React.useState("");

 const validate = () => {
  if (!validateEmail(email)) {
   setInvalidEmail("Please enter a valid email");
   return false;
  }
  return true;
 };

 const handleSubmit = async () => {
  setLoading(true);
  setTimeout(() => {
   if (validate()) {
    // When user email exist
    // navigate("PasswordScreen", {
    //  email: email,
    // });
    // If user email doesnt exist
    navigate("EmailOtpScreen", {
     email: email,
    });
   }
   setLoading(false);
  }, 2000);
 };

 return (
  <StyleSaveAreaView>
   <HeaderBrand />
   <View style={styles.container_input}>
    <ScrollView>
     <CustomInput
      label="EMAIL :"
      placeholder="Eg: example@email.com"
      value={email}
      inputMode="email"
      focusable={true}
      autoFocus={true}
      returnKeyType="done"
      error={invalidEmail}
      onEndEditing={() => validate()}
      onChangeText={(value) => {
       setEmail(value);
       setInvalidEmail("");
      }}
      onSubmitEditing={handleSubmit}
     />
    </ScrollView>
   </View>
   <View style={GlobalStyles.bottomBtn}>
    <CustomButton
     text="Next"
     loading={loading}
     disabled={loading}
     onPress={() => handleSubmit()}
    />
   </View>
  </StyleSaveAreaView>
 );
}

const styles = StyleSheet.create({
 container_input: {
  paddingHorizontal: 8,
  marginTop: 40,
  display: "flex",
  flexDirection: "column",
  gap: 10,
 },
});
