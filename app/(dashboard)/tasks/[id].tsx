import { createTask } from "@/services/taskService";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const TaskFormScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const isNew = !id || id === "new";
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async () => {
    if (!title.trim) {
      Alert.alert("Validations", "Title is required!");
      return;
    }
    try {
      if (isNew) {
        await createTask({ title, description });
      }
      router.back();
    } catch (err) {
      console.error("Error saving task:", err);
      Alert.alert("Error", "Failed to save task. Please try again.");
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* AppBar/Header */}
      <View className="w-full px-6 pt-12 pb-4 flex-row items-center justify-between shadow-md rounded-b-3xl">
        <Text className="text-2xl font-bold text-blue-600 tracking-tight">
          {isNew ? "Add Task" : "Edit Task"}
        </Text>
        {/* Placeholder for options/settings icon */}
        {/* <MaterialIcons name="more-vert" size={24} color="#2563eb" /> */}
      </View>

      {/* Form Card */}
      <View className="mx-5 mt-8 bg-white rounded-3xl shadow-xl p-6">
        {/* Modern Title Input */}
        <Text className="text-lg font-medium text-blue-800 mb-2">Title</Text>
        <TextInput
          className="border border-blue-200 bg-white px-5 py-3 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg text-blue-900 mb-6 font-medium"
          placeholder="Task title (e.g. Grocery shopping)"
          value={title}
          onChangeText={setTitle}
          maxLength={40}
          autoFocus
        />

        {/* Large Description Input */}
        <Text className="text-lg font-medium text-blue-800 mb-2">
          Description
        </Text>
        <TextInput
          className="border border-blue-200 bg-white px-5 py-6 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-base text-blue-800 mb-8 h-48"
          placeholder="Add details, notes, deadlines, etc..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={10}
          textAlignVertical="top"
        />

        <TouchableOpacity
          className="bg-blue-500 rounded-full px-6 py-4 shadow-md active:bg-blue-600"
          onPress={handleSubmit}
        >
          <Text className="text-lg text-white text-center font-semibold tracking-wide uppercase">
            {isNew ? "Add Task" : "Update Task"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskFormScreen;
