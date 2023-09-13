import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type WorkoutsState = {
  workouts: { [key: string]: string[] };
  addPlan: (plan: string) => void;
  addWorkout: (workout: string, plan: string) => void;
  removePlan: (plan: string) => void;
  removeWorkout: (plan: string, index: number) => void;
};

export const useWorkout = create<WorkoutsState>()(
  persist(
    (set, get) => ({
      workouts: {},
      removePlan: (plan) => {
        const tmp = get().workouts;
        delete tmp[plan];
        set({ workouts: tmp });
      },
      addPlan: (plan) => {
        set((state) => {
          if (state.workouts[plan]) {
            return { workouts: state.workouts };
          } else {
            return {
              workouts: { ...state.workouts, [plan]: [] },
            };
          }
        });
      },
      addWorkout: (workout, plan) => {
        set((state) => {
          const tmpWorkout = { ...state.workouts };
          tmpWorkout[plan].push(workout);
          return { workouts: tmpWorkout };
        });
      },
      removeWorkout: (plan, index) => {
        const workouts = get().workouts;
        workouts[plan].splice(index, 1);
        set({ workouts: workouts });
      },
    }),
    { name: "workout-store", storage: createJSONStorage(() => AsyncStorage) }
  )
);
