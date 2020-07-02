import { YellowBox } from "react-native";
import * as firebase from "firebase";

export default useFirebase = () => {
  // Ignoring warnings for long timer issue
  YellowBox.ignoreWarnings(["Setting a timer"]);

  const firebaseConfig = {
    apiKey: "AIzaSyAd3K4vNIxPSF4CxMy92-ZwjT6ueR-CdeY",
    authDomain: "distance-tracker-692e7.firebaseapp.com",
    databaseURL: "https://distance-tracker-692e7.firebaseio.com",
    projectId: "distance-tracker-692e7",
    storageBucket: "distance-tracker-692e7.appspot.com",
    messagingSenderId: "1012368166836",
    appId: "1:1012368166836:web:7f5c1d9f041a03e7a22ce1",
    measurementId: "G-4F4H7CJ429",
  };

  firebase.initializeApp(firebaseConfig);

  return firebase;
};
