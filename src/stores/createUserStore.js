export const createUserStore = (set) => ({
  user: {
    uid: null,
    courses: [],
    progress: {}, // Stores progress as an object of objects
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

  setUserCourses: (courses) =>
    set((state) => ({
      user: {
        ...state.user,
        courses: courses,
      },
    })),

  updateUserCourses: (updatedCourses) =>
    set((state) => ({ user: { ...state.user, courses: updatedCourses } })),

  addUserProgress: (newProgress) =>
    set((state) => ({
      user: {
        ...state.user,
        progress: mergeProgress(state.user.progress, newProgress),
      },
    })),

  updateUserProgress: (updatedProgress) =>
    set((state) => ({
      user: {
        ...state.user,
        progress: mergeProgress(state.user.progress, updatedProgress),
      },
    })),

  resetUser: () =>
    set(() => ({
      user: {
        uid: null,
        courses: [],
        progress: {},
      },
    })),
});

// Utility function for deep merging progress
const mergeProgress = (current, incoming) => {
  const result = { ...current };

  for (const courseKey in incoming) {
    if (!result[courseKey]) {
      result[courseKey] = incoming[courseKey];
    } else {
      for (const unitKey in incoming[courseKey]) {
        if (!result[courseKey][unitKey]) {
          result[courseKey][unitKey] = incoming[courseKey][unitKey];
        } else {
          result[courseKey][unitKey] = {
            ...result[courseKey][unitKey],
            ...incoming[courseKey][unitKey],
          };
        }
      }
    }
  }

  return result;
};
