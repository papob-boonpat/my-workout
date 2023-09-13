import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Muscle = ({
  part,
  setWorkout,
}: {
  part: Workout;
  setWorkout: (workouts: string[]) => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setWorkout(part.workouts);
      }}
    >
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {part.name}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 50,
    width: "100%",
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Muscle;
