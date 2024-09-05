import { StyleSheet, View } from "react-native";
import React from "react";
import CenteredBrand from "./CenteredBrand";
import BackButton from "./buttons/BackButton";

interface HeaderBrandProps {
 path?: string;
}

const HeaderBrand: React.FC<HeaderBrandProps> = (props) => {
 return (
  <View style={styles.header}>
   <BackButton path={props.path} />
   <View style={styles.br} />
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
 br: {
  flex: 1,
 },
 brandContainer: {
  position: "absolute",
  top: 0,
  left: 35,
  right: 50,
  justifyContent: "center",
  alignItems: "center",
 },
});
