import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useWorkout } from "@/store/workouts";

const Workout = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { workouts, removeWorkout } = useWorkout();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: id,
      headerRight: () => (
        <Link
          href={{ pathname: "/workoutsModal", params: { id: id } }}
          style={{ width: 40 }}
          asChild
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Octicons name="plus" size={25} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={workouts[id as string]}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#bcbcbc" }} />
        )}
        ListFooterComponent={() => (
          <View style={{ height: 1, backgroundColor: "#bcbcbc" }} />
        )}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{item}</Text>
            <TouchableOpacity
              onPress={() => {
                removeWorkout(id as string, index);
              }}
            >
              <Ionicons name="trash" size={20} color={"#ed9595"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Workout;
