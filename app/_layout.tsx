import { AuthProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import React from "react";
import "./../global.css";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
