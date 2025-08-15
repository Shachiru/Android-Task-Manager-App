import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Login = () => {
  const router = useRouter();

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center p-4">Login</Text>
      <Pressable className="px-6 py-3" onPress={() => router.push("/home")}>
        <Text className="text-2xl text-center">Go to Home</Text>
      </Pressable>

      <Pressable className="px-6 py-3" onPress={() => router.push("/register")}>
        <Text className="text-2xl text-center">Go to Register</Text>
      </Pressable>
    </View>
  );
};

export default Login;
