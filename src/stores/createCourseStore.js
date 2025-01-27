export const createCoursesStore = (set) => ({
  coursesAll: {},

  setCourses: (newCourses) => {
    set(() => ({
      coursesAll: newCourses,
    }));
  },

  getCoursesByLanguage: (languageCode) => (state) =>
    state.coursesAll[languageCode] || [],
});
