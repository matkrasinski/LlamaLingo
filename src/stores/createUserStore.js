import languages from "../utils/languages";

export const createUserStore = (set) => ({
  users: {
    email: {},
    language: {},
    progress: {
      unit: {},
      lesson: {},
    },
    setEmail: (newEmail) => set({ email: newEmail }),
    // setLanguage: (newLanguage) => set({ language: newLanguage }),
    // setProgress: (newProgress) => set({ progress: newProgress }), 
    
  }, 

  setEmail: (email) =>
    set((state) => ({
      users: {
        ...state.users,
        [email]: {
          ...(state.users[email] || {}),
          email,
        },
      },
    })),

  setLanguage: (email, language) =>
    set((state) => ({
      users: {
        ...state.users,
        [email]: {
          ...(state.users[email] || {}),
          language,
        },
      },
    })),

    setProgress: (email, unit, lesson) =>
      set((state) => ({
        users: {
          ...state.users,
          [email]: {
            ...(state.users[email] || {}),
            progress: { unit, lesson },
          },
        },
      })),  
  // setUserInfo: (email, userInfo) =>
  //   set((state) => ({
  //     users: {
  //       ...state.users,
  //       [email]: {
  //         ...(state.users[email] || {}),
  //         ...userInfo, 
  //       },
  //     },
  //   })),
  // getUserInfo: (email) => (state) => state.users[email] || null,
});
