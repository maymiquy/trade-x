import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import CenteredBrand from "./CenteredBrand";

const HeaderBrand = () => {
 return (
  <View style={styles.header}>
   <BackButton />
   <View style={styles.brandContainer}>
    <CenteredBrand />
   </View>
  </View>
 );
};

export default HeaderBrand;

const styles = StyleSheet.create({
 header: {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "hidden",
 },
 brandContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
});
