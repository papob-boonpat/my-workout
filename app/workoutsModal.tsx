import Muscle from "@/components/muscle";
import Workout from "@/components/workout";
import { WORKOUTS } from "@/constants/workoutData";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";

export default function ModalScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <>
      {selected.length ? (
        <FlatList
          contentContainerStyle={{ gap: 20, padding: 20 }}
          data={selected}
          renderItem={({ item }) => (
            <Workout workout={item} id={id as string} />
          )}
        />
      ) : (
        <FlatList
          contentContainerStyle={{ gap: 20, padding: 20 }}
          data={WORKOUTS}
          renderItem={({ item }) => (
            <Muscle part={item} setWorkout={setSelected} />
          )}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
