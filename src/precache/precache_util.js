const fs = require("fs");

const unitNumbers = [1, 2, 3];
const lessonNumbers = [1, 2, 3, 4, 5];
const taskNumbers = [1, 2, 3];
const taskMapper = {
  1: "pickPhoto",
  2: "translate",
  3: "pickWords",
};
// Generate all routes
const routes = [];

unitNumbers.forEach((unit) => {
  lessonNumbers.forEach((lesson) => {
    taskNumbers.forEach((task) => {
      routes.push(`/lessons/${unit}/${lesson}/${task}/${taskMapper[task]}`);
    });
  });
});

// Write routes to a JSON file
fs.writeFileSync("lessons-routes.json", JSON.stringify(routes, null, 2));
console.log("Routes generated and saved to dist/lessons-routes.json");
