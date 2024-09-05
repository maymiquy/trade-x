import AccountProtectedScreen from "../../screens/auth/AccountProtectedScreen";
import AuthScreen from "../../screens/auth/AuthScreen";
import AuthVerificationScreen from "../../screens/auth/AuthVerificationScreen";
import ConfirmPinScreen from "../../screens/auth/ConfirmPinScreen";
import EmailLoginScreen from "../../screens/auth/EmailLoginScreen";
import EmailOtpScreen from "../../screens/auth/EmailOtpScreen";
import EmailPasswordScreen from "../../screens/auth/EmailPasswordScreen";
import ForgotPassword from "../../screens/auth/ForgotPassword";
import PersonalDetailScreen from "../../screens/auth/PersonalDetailScreen";
import PhoneScreen from "../../screens/auth/PhoneScreen";
import PinScreen from "../../screens/auth/PinScreen";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import SplashScreen from "../../screens/auth/SplashScreen";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";

export const authStack = [
 {
  name: "AuthScreen",
  component: AuthScreen,
 },
 {
  name: "EmailLoginScreen",
  component: EmailLoginScreen,
 },
 {
  name: "EmailOtpScreen",
  component: EmailOtpScreen,
 },
 {
  name: "EmailPasswordScreen",
  component: EmailPasswordScreen,
 },
 {
  name: "PhoneScreen",
  component: PhoneScreen,
 },
 {
  name: "PinScreen",
  component: PinScreen,
 },
 {
  name: "ConfirmPinScreen",
  component: ConfirmPinScreen,
 },
 {
  name: "AccountProtectedScreen",
  component: AccountProtectedScreen,
 },
 {
  name: "PersonalDetailScreen",
  component: PersonalDetailScreen,
 },
 {
  name: "RegisterScreen",
  component: RegisterScreen,
 },
 {
  name: "ForgotPassword",
  component: ForgotPassword,
 },
 {
  name: "AuthVerificationScreen",
  component: AuthVerificationScreen,
 },
 {
  name: "SplashScreen",
  component: SplashScreen,
 },
 {
  name: "ProfileScreen",
  component: ProfileScreen,
 },
];

export const dashboardStack = [
 {
  name: "HomeScreen",
  component: HomeScreen,
 },
];

export const screenStack = [...authStack, ...dashboardStack];
