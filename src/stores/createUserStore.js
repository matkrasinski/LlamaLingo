export const createUserStore = (set) => ({
  user: {
    uid: null,
    courses: [],
  },

  setUser: (userData) =>
    set((state) => ({
      user: {
        ...state.user,
        ...userData,
      },
    })),

  addUserCourses: (courses) =>
    set((state) => ({
      user: {
        ...state.user,
        courses: [...state.user.courses, courses],
      },
    })),

  updateUserCourses: (updatedCourses) =>
    set((state) => ({ user: { ...state.user, courses: updatedCourses } })),

  resetUser: () =>
    set(() => ({
      user: {
        uid: null,
        courses: [],
      },
    })),
});
