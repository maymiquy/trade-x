import { ColorSchemeName, useColorScheme } from "react-native";
import { useAppSelector } from "../redux/app-hook";
import { selectTheme } from "../redux/slices/theme-slice";
import { Colors } from "../utils/constants/Colors";

interface ThemeColors {
 background: string;
 text: string;
 border: string;
 card: string;
 notification: string;
 primary: string;
}

interface Theme {
 dark: boolean;
 colors: ThemeColors;
}

export const lightTheme: Theme = {
 dark: false,
 colors: {
  background: Colors.light_background,
  border: Colors.light_border,
  card: Colors.light_card,
  notification: Colors.noti_card_light,
  primary: Colors.themeColor,
  text: Colors.light_text,
 },
};

export const darkTheme: Theme = {
 dark: true,
 colors: {
  background: Colors.dark_background,
  border: Colors.dark_border,
  card: Colors.dark_card,
  notification: Colors.noti_card_dark,
  primary: Colors.themeColor,
  text: Colors.dark_text,
 },
};

export const useTheme = (): Theme => {
 const currentTheme = useAppSelector(selectTheme);
 const scheme = useColorScheme();
 if (currentTheme) {
  return currentTheme === "dark" ? darkTheme : lightTheme;
 } else {
  return scheme === "dark" ? darkTheme : lightTheme;
 }
};

export const useScheme = (): ColorSchemeName => {
 const currentTheme = useAppSelector(selectTheme);
 const scheme = useColorScheme();
 if (currentTheme) {
  return currentTheme === "dark" ? "dark" : "light";
 } else {
  return scheme;
 }
};
