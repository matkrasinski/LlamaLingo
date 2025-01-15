export const createUserStore = (set) => ({
  user: {
    uid: null,
    language: [],
    progress: {},
  },

  setUser: (userData) =>
    set((state) => ({
      user: {
        ...state.user,
        ...userData,
      },
    })),

  addUserLanguage: (language) =>
    set((state) => ({
      user: {
        ...state.user,
        language: [...state.user.language, language],
      },
    })),

  updateUserProgress: (progress) =>
    set((state) => ({
      user: {
        ...state.user,
        progress: { ...state.user.progress, ...progress },
      },
    })),

  resetUser: () =>
    set(() => ({
      user: {
        uid: null,
        language: [],
        progress: {},
      },
    })),
});
