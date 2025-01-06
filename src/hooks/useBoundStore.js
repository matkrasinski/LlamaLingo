import { create } from "zustand";

import { createGoalXpSlice } from "../stores/createGoalXpStore";
import { createLanguageSlice } from "../stores/createLanguageStore";
// import { createLessonSlice } from "../stores/createLessonStore";
// import { createLingotSlice } from "../stores/createLingotStore";
// import { createSoundSettingsSlice } from "../stores/createSoundSettingsStore";
// import { createStreakSlice } from "../stores/createStreakStore";
// import { createUserSlice } from "../stores/createUserStore";
// import { createXpSlice } from "../stores/createXpStore";

export const useBoundStore = create((set) => ({
  ...createGoalXpSlice(set),
  ...createLanguageSlice(set),
  // ...createLessonSlice(set),
  // ...createLingotSlice(set),
  // ...createSoundSettingsSlice(set),
  // ...createStreakSlice(set),
  // ...createUserSlice(set),
  // ...createXpSlice(set),
}));
