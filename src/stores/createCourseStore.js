export const createCoursesStore = (set) => ({
  coursesAll: {},

  setCourses: (newCourses) => {
    console.log("Setting courses in store:", newCourses);
    set(() => ({
      coursesAll: newCourses,
    }));
  },

  getCoursesByLanguage: (languageCode) => (state) =>
    state.coursesAll[languageCode] || [],
});
