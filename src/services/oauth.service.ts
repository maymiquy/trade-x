import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Toast from "react-native-toast-message";

const handleSignInSuccess = (idToken: string | null) => {
 console.log("Token:", idToken);
 Toast.show({
  type: "success",
  text1: "Sign In Success",
  text2: "Successfully Signed In",
 });
};

const handleSignInError = (error: any) => {
 console.error("Error:", error.message);
 Toast.show({
  type: "error",
  text1: "Opps, Failed While Sign In",
  text2: "Please try again",
 });
};

export const signInWithGoogle = async () => {
 try {
  await GoogleSignin.hasPlayServices();
  await GoogleSignin.signOut();
  const { idToken } = await GoogleSignin.signIn();
  handleSignInSuccess(idToken);
 } catch (error) {
  handleSignInError(error);
 }
};
