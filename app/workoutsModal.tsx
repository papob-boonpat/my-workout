import Workout from "@/components/workout";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";

export default function ModalScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: id,
    });
  }, []);

  const DATA = ["Bench Press", "Incline Bench Press", "Machine Chest fly"];
  return (
    <FlatList
      contentContainerStyle={{ gap: 20, padding: 20 }}
      data={DATA}
      renderItem={({ item }) => <Workout workout={item} />}
    />
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
