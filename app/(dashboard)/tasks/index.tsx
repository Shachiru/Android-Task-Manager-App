import { getAllTask } from "@/services/taskService";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

const TaskScreen = () => {
  const handleFetchData = async () => {
    await getAllTask()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const router = useRouter();

  return (
    <View className="flex-1 w-full justify-center items-center bg-gray-100 relative">
      <Text className="text-4xl text-center text-gray-800 font-bold mb-4">
        Task Screen
      </Text>
      {/* Floating Action Button - Bottom Right */}
      <Pressable
        className="absolute bottom-8 right-8 bg-blue-600 rounded-full p-5 shadow-lg hover:bg-blue-700 active:bg-blue-800"
        onPress={() => router.push("/(dashboard)/tasks/new")}
        style={{
          elevation: 6,
        }}
      >
        <MaterialIcons name="add" size={28} color={"#fff"} />
      </Pressable>
    </View>
  );
};

export default TaskScreen;
