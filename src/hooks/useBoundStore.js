import { create } from "zustand";

import { createLanguageSlice } from "../stores/createLanguageSlice";

export const useBoundStore = create((set) => ({
  ...createLanguageSlice(set),
}));
