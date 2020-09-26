import React, { useState } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import InputArea from "./components/InputArea/InputArea";
import GoalArea from "./components/GoalArea/GoalArea";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.container}>
      <InputArea
        addTodo={(goal) => {
          setTodos((currState) => [
            ...currState,
            { key: Math.random().toString(), text: goal },
          ]);
          ToastAndroid.showWithGravity(
            "Goal Added Successfully",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
        }}
      />
      <GoalArea
        goals={todos}
        deleteTodo={(goalId) => {
          setTodos((currState) => {
            return currState.filter((goal) => goal.key !== goalId);
          });
          ToastAndroid.showWithGravity(
            "Goal Deleted",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
