import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useWorkout } from "@/store/workouts";

const WorkoutPlan = ({ item }: { item: string }) => {
  const { removePlan } = useWorkout();
  return (
    <Link href={{ pathname: "/workouts", params: { id: item } }} asChild>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.plan} ellipsizeMode="tail" numberOfLines={1}>
          {item}
        </Text>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            removePlan(item);
          }}
        >
          <Ionicons name="trash-bin" size={20} color={"#ed9595"} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 80,
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
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  plan: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WorkoutPlan;
