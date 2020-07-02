import React, { useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import LottieView from "lottie-react-native";
import { getData, putData } from "../firebase/connect";

function Home({ loading, setLoading, userInfo }) {
  let users = null;
  setLoading(true);
  useEffect(() => {
    putData("users", userInfo);
  }, []);
  users = getData("users");
  setLoading(false);

  const getDistanceInKm = (lat2, lon2) => {
    let lat1 = userInfo.latitude;
    let lon1 = userInfo.longitude;
    if (lat2 && lon2) {
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
    }
    return -1;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            autoPlay
            loop
            style={{ width: 150, height: 150 }}
            source={require("../assets/animations/loading.json")}
          />
        </View>
      ) : (
        <View style={styles.container}>
          {console.log(users)}
          {users.length > 0 && (
            <FlatList
              data={users}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ListItem
                  key={item.id}
                  title={item.name}
                  subtitle={getDistanceInKm(
                    item.latitude,
                    item.longitude
                  ).toString()}
                  bottomDivider
                />
              )}
            />
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
