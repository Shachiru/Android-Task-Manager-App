import { register } from "@/services/authService";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    if (isLoading) return;
    if (password !== confirmPassword) {
      Alert.alert("Title", "description");
      return;
    }

    await register(email, password)
      .then((res) => {
        router.back();
      })
      .catch((err) => {
        Alert.alert("Error", "Registration failed");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View className="flex-1 w-full justify-center items-center bg-blue-100 px-4 py-8">
      <View className="w-full max-w-sm bg-white rounded-3xl p-6 mx-4 elevation-8">
        <View className="mb-8 items-center">
          <Text className="text-3xl font-black text-slate-800 mb-2 text-center">
            Create Account
          </Text>
          <Text className="text-sm text-slate-500 font-medium text-center">
            Join us today and get started
          </Text>
        </View>

        <View className="mb-6">
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            className="w-full bg-slate-50 rounded-2xl px-4 py-4 text-slate-900 text-base font-medium mb-4"
          />

          <TextInput
            placeholder="Create password"
            value={password}
            onChangeText={setPassword}
            className="w-full bg-slate-50 rounded-2xl px-4 py-4 text-slate-900 text-base font-medium mb-4"
            secureTextEntry
          />

          <TextInput
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            className="w-full bg-slate-50 rounded-2xl px-4 py-4 text-slate-900 text-base font-medium"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          className={
            isLoading
              ? "w-full mt-4 mb-6 rounded-2xl px-6 py-5 bg-gray-400 elevation-2"
              : "w-full mt-4 mb-6 rounded-2xl px-6 py-5 bg-blue-600 elevation-4"
          }
          disabled={isLoading}
        >
          <View className="flex-row items-center justify-center">
            {isLoading ? (
              <ActivityIndicator color="#ffffff" size="small" />
            ) : (
              <Text className="text-white font-bold text-xl text-center">
                Create Account
              </Text>
            )}
          </View>
        </TouchableOpacity>

        <View className="items-center">
          <Pressable
            onPress={() => router.back()}
            className="px-4 py-3 rounded-xl"
          >
            <Text className="text-slate-600 font-semibold text-base text-center">
              Already have an account?{" "}
              <Text className="text-blue-600 font-bold">Sign In</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Register;
