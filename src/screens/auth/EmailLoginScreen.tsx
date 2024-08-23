import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import StyleSaveAreaView from "../../components/common/StylesSaveAreaView";
import HeaderBrand from "../../components/common/HeaderBrand";
import CustomInput from "../../components/common/inputs/CustomInput";
import CustomButton from "../../components/common/buttons/CustomButton";
import { normalizeModerately } from "../../utils/scaling-util";
import StylesGlobalText from "../../components/common/StylesGlobalText";

export default function EmailLoginScreen() {
 return (
  <StyleSaveAreaView>
   <HeaderBrand />
   <ScrollView style={styles.container_input}>
    <CustomInput label="Email :" placeholder="Eg: example@email.com" />
    <CustomInput
     label="Password :"
     placeholder="Min 8-20 Characters"
     mainContainerStyle={styles.input}
    />
    <CustomInput
     label="OTP :"
     rightText={<StylesGlobalText>Resen in 60s</StylesGlobalText>}
     placeholder="Enter OTP"
     mainContainerStyle={styles.input}
    />
   </ScrollView>
   <View style={styles.button_container}>
    <CustomButton text="Sign In" onPress={() => {}} />
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
 input: {
  marginTop: 40,
 },
 button_container: {
  width: "100%",
  position: "absolute",
  top: normalizeModerately(680),
  right: normalizeModerately(15),
  paddingHorizontal: 8,
 },
});
