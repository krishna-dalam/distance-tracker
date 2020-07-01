import React from "react";
import { View, StyleSheet } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        leftIcon={
          <Icon
            name="email"
            type="material-community"
            size={24}
            color="black"
          />
        }
      />
      <Input
        secureText
        placeholder="Password"
        leftIcon={
          <Icon name="lock" type="material-community" size={24} color="black" />
        }
      />
      <Button raised title="Submit" loading />
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
