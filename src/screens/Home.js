import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, YellowBox } from "react-native";
import * as firebase from "firebase";
import { ListItem } from "react-native-elements";
import getUsers from "../firebase/getUsers";

function Home() {
  //   const [users, setUsers] = useState([]);

  const users = getUsers();

  return (
    <View style={styles.container}>
      {console.log(users)}
      {users &&
        users.map((user, index) => {
          return <ListItem key={index} title={user.name} bottomDivider />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default Home;
