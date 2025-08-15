import { login } from "@/services/authService";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = async () => {
    if (isLoading) return;
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    await login(email, password)
      .then((res) => {
        router.push("/home");
      })
      .catch((err) => {
        Alert.alert("Error", "Login failed");
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
            Welcome Back
          </Text>
          <Text className="text-sm text-slate-500 font-medium text-center">
            Sign in to your account
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
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            className="w-full bg-slate-50 rounded-2xl px-4 py-4 text-slate-900 text-base font-medium mb-4"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleLogin}
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
                Sign In
              </Text>
            )}
          </View>
        </TouchableOpacity>

        <View className="border-t border-slate-200 pt-6">
          <Text className="text-center text-slate-500 font-medium mb-4">
            Don't have an account?
          </Text>
          <Pressable
            onPress={() => router.push("/register")}
            className="w-full rounded-2xl px-6 py-4 bg-slate-50 border border-slate-200"
          >
            <Text className="text-slate-700 font-semibold text-lg text-center">
              Create Account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
