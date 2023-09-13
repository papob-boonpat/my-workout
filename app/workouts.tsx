import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Workout = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: id,
      headerRight: () => (
        <Link
          href={{ pathname: "/workoutsModal", params: { id: "chest" } }}
          asChild
        >
          <TouchableOpacity>
            <Octicons name="plus" size={25} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      ),
    });
  }, []);

  return (
    <View>
      <Text>Workout</Text>
    </View>
  );
};

export default Workout;
