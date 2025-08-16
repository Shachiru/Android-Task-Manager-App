import { getAllTask } from "@/services/taskService";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

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

  return (
    <View className="flex-1 w-full justify-center items-center">
      <Text className="text-4xl text-center">Task Screen</Text>
    </View>
  );
};

export default TaskScreen;
