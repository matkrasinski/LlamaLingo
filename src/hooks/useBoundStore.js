import { create } from "zustand";

import { createLanguageSlice } from "../stores/createLanguageSlice";
import { createUserStore  } from "../stores/createUserStore";
import { createCoursesStore } from "../stores/createCourseStore";

export const useBoundStore = create((set) => ({
  ...createLanguageSlice(set),
  ...createUserStore(set),
  ...createCoursesStore(set),
}));
