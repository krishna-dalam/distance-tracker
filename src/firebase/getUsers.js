import * as firebase from "firebase";
import { useState, useEffect } from "react";
import { YellowBox } from "react-native";

// Ignoring warnings for long timer issue
YellowBox.ignoreWarnings(["Setting a timer"]);

const config = {
  apiKey: "AIzaSyDB2O8iJimHO-GTcXgocxDhNyZs6dFONts",
  authDomain: "fir-realtime-database-5d012.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-5d012.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};

const initializeFirebase = () => {
  const initialize = async () => {
    try {
      await firebase.initializeApp(config);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initialize();
  }, []);
};

export default getUsers = () => {
  const [users, setUsers] = useState([]);
  initializeFirebase();

  const get = async () => {
    try {
      await firebase
        .database()
        .ref("users")
        .on("value", (data) => {
          let fetchedUsers = [];
          data.forEach((child) => {
            fetchedUsers.push({ ...child.val() });
          });
          setUsers(fetchedUsers);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get();
  }, []);
  return users;
};
