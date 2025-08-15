import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: (data) => (
            <View>
              <MaterialIcons name="home" size={data.size} color={data.color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: (data) => (
            <View>
              <MaterialIcons
                name="check-circle"
                size={data.size}
                color={data.color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: (data) => (
            <View>
              <MaterialIcons
                name="settings"
                size={data.size}
                color={data.color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (data) => (
            <View>
              <MaterialIcons
                name="view-list"
                size={data.size}
                color={data.color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
