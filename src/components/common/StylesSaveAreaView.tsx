import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

interface StyleSaveAreaViewProps {
 children: React.ReactNode;
 style?: ViewStyle;
}

const StyleSaveAreaView: React.FC<StyleSaveAreaViewProps> = ({
 children,
 style,
}) => {
 return (
  <SafeAreaView style={[styles.container, style]}>
   <View style={[styles.container, style]}>{children}</View>
  </SafeAreaView>
 );
};

export default StyleSaveAreaView;

const styles = StyleSheet.create({
 container: {
  padding: 10,
  flex: 1,
 } as ViewStyle,
});
