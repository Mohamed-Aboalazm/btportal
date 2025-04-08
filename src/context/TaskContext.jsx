import React, { createContext, useState, useCallback } from "react";
import { getTaskMaster } from "../utils/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const apiData = await getTaskMaster();
      if (!apiData.error) {
        setTasks(apiData.data);
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  }, []);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const updateTask = (updatedTask) =>
    setTasks((prev) =>
      prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((task) => task._id !== id));

  return (
    <TaskContext.Provider
      value={{ tasks, fetchTasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
