import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import useLocation from "./src/location/useLocation";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const location = useLocation();
  return (
    <>
      {loggedIn ? (
        <Home
          userInfo={{ ...userInfo, ...location }}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <Login
          loading={loading}
          setLoading={setLoading}
          setLoggedIn={setLoggedIn}
          setUserInfo={setUserInfo}
        />
      )}
    </>
  );
}
