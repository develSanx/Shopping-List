import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function GoalArea(props) {
  return (
    <View style={styles.Container}>
      <FlatList
        data={props.goals}
        renderItem={(itemData) => (
          <View style={styles.goalWraper}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
            <AntDesign
              name="delete"
              size={20}
              color="white"
              onPress={() => {
                props.deleteTodo(itemData.item.key);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
    flex: 1,
  },
  goalWraper: {
    backgroundColor: "#00557f",
    paddingVertical: 18,
    flexDirection: "row",
    paddingHorizontal: 30,
    width: "100%",
    borderRadius: 100,
    justifyContent: "space-between",
    marginVertical: 5,
  },
  goalText: {
    color: "white",
  },
});

export default GoalArea;
