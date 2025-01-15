import { create } from "zustand";

import { createLanguageSlice } from "../stores/createLanguageSlice";
import { createUserStore  } from "../stores/createUserStore";

export const useBoundStore = create((set) => ({
  ...createLanguageSlice(set),
  ...createUserStore(set),
}));
