import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Google from "expo-google-app-auth";
import LottieView from "lottie-react-native";

const config = {
  androidClientId:
    "167331754911-j7nilhb2aqfhs9p44280j9etbfnq1t4v.apps.googleusercontent.com",
};

function Login({ setLoggedIn, loading, setLoading, setUserInfo }) {
  const login = async () => {
    try {
      setLoading(true);
      const { type, accessToken, user } = await Google.logInAsync(config);
      if (type === "success") {
        console.log(accessToken, user);
        setUserInfo({ accessToken, ...user });
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <LottieView
          autoPlay
          loop
          style={{ width: 150, height: 150 }}
          source={require("../assets/animations/loading.json")}
        />
      ) : (
        <SocialIcon
          title={"SignIn with Google"}
          button
          onPress={login}
          raised
          type="google"
          style={{ width: "90%" }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
