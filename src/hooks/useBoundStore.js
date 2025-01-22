import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import { createLanguageSlice } from "../stores/createLanguageSlice";
import { createUserStore } from "../stores/createUserStore";
import { createCoursesStore } from "../stores/createCourseStore";

export const useBoundStore = create(
  persist(
    (set) => ({
      ...createLanguageSlice(set),
      ...createUserStore(set),
      ...createCoursesStore(set),
    }
    ),
    {
      name: 'store-storage',
      storage: createJSONStorage(() => localStorage),
    },
  )
);
