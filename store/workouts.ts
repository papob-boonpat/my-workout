import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type WorkoutsState = {
  workouts: Workout[];
  addPlan: (plan: string) => void;
};

export const useWorkout = create<WorkoutsState>()(
  persist(
    (set) => ({
      workouts: [],
      addPlan: (plan) => {
        set((state) => {
          if (state.workouts.find((w) => w.name === plan)) {
            return { workouts: state.workouts };
          } else {
            return {
              workouts: [...state.workouts, { name: plan, workout: [] }],
            };
          }
        });
      },
    }),
    { name: "workout-store", storage: createJSONStorage(() => AsyncStorage) }
  )
);
