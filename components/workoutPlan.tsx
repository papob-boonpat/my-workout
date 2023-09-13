import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const WorkoutPlan = ({ item }: { item: string }) => {
  return (
    <Link href={{ pathname: "/workouts", params: { id: item } }} asChild>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.plan} ellipsizeMode="tail" numberOfLines={1}>
          {item}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
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
    justifyContent: "center",
  },
  plan: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WorkoutPlan;
