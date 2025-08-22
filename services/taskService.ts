import { db } from "@/firebase";
import { Task } from "@/types/task";
import { addDoc, collection } from "firebase/firestore";
import api from "./config/api";

export const taskColRef = collection(db, "tasks");

export const getAllTask = async () => {
  const res = await api.get("/task");
  return res.data;
};

export const addTask = async (task: any) => {
  const res = await api.post("/task", task);
  return res.data;
};

// firebase firestore

export const createTask = async (task: Task) => {
  const docRef = await addDoc(taskColRef, task);
  return docRef.id;
};
