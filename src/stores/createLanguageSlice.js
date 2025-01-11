import languages from "../utils/languages";

const spanishLanguageIndex = 6;

export const createLanguageSlice = (set, defaultLanguage = languages[spanishLanguageIndex]) => ({
  language: defaultLanguage,
  setLanguage: (newLanguage) => set({ language: newLanguage }),
});
