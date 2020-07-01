import React from "react";
import { Text, View, StyleSheet, Button, YellowBox } from "react-native";

import useLocation from "./src/location/useLocation";
import { Input } from "react-native-elements";
import Home from "./src/screens/Home";

export default function App() {
  const location = useLocation();

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const putUser = (collection, id, data) => {
    database
      .ref("/users/001") // replace with collection/id
      .set({
        // replace with data
        name: "Krishna",
        age: 25,
      })
      .then(() => {
        console.log("Inserted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <View style={styles.container}>
    //   <Input placeholder="Name" onPress />
    //   <Button title="Call DB" onPress={putUser} />
    // </View>
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
