export const createUserStore = (set) => ({
  user: {
    uid: null,
    courses: [],
    progress: {},
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

  addUserProgress: (progress) =>
    set((state) => ({
      user: {
        ...state.user,
        progress: {...state.user.progress, progress},
      },
    })),

  setUserCourses: (courses) =>
    set((state) => ({
      user: {
        ...state.user,
        courses: courses,
      },
    })),

  setUserProgress: (progress) =>
    set((state) => ({
      user: {
        ...state.user,
        progress: progress,
      },
    })),

  updateUserCourses: (updatedCourses) =>
    set((state) => ({ user: { ...state.user, courses: updatedCourses } })),
  
  updateUserProgress: (updatedProgress) =>
    set((state) => ({ user: { ...state.user, progress: updatedProgress } })),

  resetUser: () =>
    set(() => ({
      user: {
        uid: null,
        courses: [],
        progress:[],
      },
    })),
});
