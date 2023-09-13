import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import WorkoutPlan from "@/components/workoutPlan";
import { useNavigation } from "expo-router";
import { useState } from "react";
import Colors from "@/constants/Colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useWorkout } from "@/store/workouts";
export type HomeStackNavigatorParamList = {
  workouts: {
    id: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "workouts"
>;
export default function TabOneScreen() {
  const navigate = useNavigation<HomeScreenNavigationProp>();
  const [showModal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const { workouts, addPlan } = useWorkout();

  const DATA: string[] = [
    "chest day",
    "leg ",
    "back",
    "back",
    "back",
    "back",
    "back",
    "back",
    "back",
    "back",
    "back",
    "back",
  ];
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.title}>My Workouts</Text>
      <Modal animationType="none" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Your Plan</Text>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setValue}
            />
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                marginTop: 20,
                gap: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal(!showModal);
                  setValue("");
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModal(!showModal);
                  addPlan(value);
                  navigate.navigate("workouts", { id: value });
                  setValue("");
                }}
              >
                <Text style={styles.textStyle}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ position: "absolute", right: 10, bottom: 10, zIndex: 10 }}>
        <TouchableOpacity style={styles.addBtn} onPress={() => setModal(true)}>
          <Octicons name="plus" size={40} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ gap: 20, padding: 20 }}
          data={workouts}
          renderItem={({ item }) => <WorkoutPlan item={item.name} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  addBtn: {
    backgroundColor: "#40e0b8",
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: Colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#949494",
  },
});
