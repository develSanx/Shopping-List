import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function InputArea(props) {
  const [goal, setGoal] = useState("");
  return (
    <View style={styles.inputWrap}>
      <TextInput
        placeholder="Enter Your New Goal"
        style={styles.goalInput}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity style={styles.addBtn} onPress={addTodoItem}>
        <Text style={styles.BtnText}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );

  function addTodoItem() {
    props.addTodo(goal);
  }

  function handleTextChange(text) {
    setGoal(text);
  }
}

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 40,
  },
  goalInput: {
    padding: 10,
    width: "70%",
    borderColor: "#818181",
    borderWidth: 2,
    borderRadius: 10,
  },
  addBtn: {
    backgroundColor: "#00557f",
  },
  BtnText: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
