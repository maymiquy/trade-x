import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

interface StyleSaveAreaViewProps {
 children: React.ReactNode;
}

const StyleSaveAreaView: React.FC<StyleSaveAreaViewProps> = ({ children }) => {
 return (
  <SafeAreaView>
   <View style={styles.container}>{children}</View>
  </SafeAreaView>
 );
};

export default StyleSaveAreaView;

const styles = StyleSheet.create({
 container: {
  padding: 20,
 },
});
