import languages from "../utils/languages";

const spanishLanguageIndex = 6;

export const createLanguageSlice = (set) => ({
  language: languages[spanishLanguageIndex],
  setLanguage: (newLanguage) => set({ language: newLanguage }),
});
