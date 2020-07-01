import * as firebase from "firebase";
import { YellowBox } from "react-native";

//Ignoring warnings for long timer issue
YellowBox.ignoreWarnings(["Setting a timer"]);

var config = {
  apiKey: "AIzaSyDB2O8iJimHO-GTcXgocxDhNyZs6dFONts",
  authDomain: "fir-realtime-database-5d012.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-5d012.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};
firebase.initializeApp(config);

const database = firebase.database();

export { database };
