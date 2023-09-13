import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";

const Workout = ({ workout }: { workout: string }) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigate.goBack()}>
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {workout}
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

export default Workout;
