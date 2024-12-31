import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Layout = () => {
  /*const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }*/
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
