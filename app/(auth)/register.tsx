import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Register = () => {
  const router = useRouter();

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center p-4">Register</Text>
      <Pressable
        className="bg-blue-500 px-5 py-3"
        onPress={() => router.back()}
      >
        <Text className="text-4xl text-center">Go to Login</Text>
      </Pressable>
    </View>
  );
};

export default Register;
